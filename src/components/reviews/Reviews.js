import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react'

const Reviews = ({getMovieData,movie,reviews = [],setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(()=>{
        getMovieData(movieId);

        // Charger les critiques pour le film donné
        const fetchReviews = async () => {
            try {
                const response = await api.get(`/api/v1/reviews/${movieId}`);
                console.log('Critiques chargées:', response.data); // Log pour le débogage
                if (response.data && Array.isArray(response.data)) {
                    setReviews(response.data);
                }
            } catch (error) {
                console.error("Erreur lors du chargement des critiques:", error);
            }
        };

        fetchReviews();
    }, [movieId, setReviews, getMovieData]);

    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;

        try {
            const response = await api.post("/api/v1/reviews", {reviewBody: rev.value, imdbId: movieId});
            console.log('Réponse après ajout d une critique:', response.data); // Log pour le débogage
            const updatedReviews = [...reviews, {body:rev.value}];
            rev.value = "";
            setReviews(updatedReviews);
        } catch(err) {
            console.error('Erreur lors de l\'ajout d\'une critique:', err);
        }
    }

  return (
    <Container>
        <Row>
            <Col><h3>Critiques</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={movie?.poster} alt="" />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = "écrire une critique?" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    Array.isArray(reviews) && reviews.map((r, index) => {
                        return(
                            <React.Fragment key={index}>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </React.Fragment>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews