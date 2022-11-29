import { useState } from "react";
import {Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form } from "formik";

const CommentForm = ({accordionId}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
        const comment = {
            accordionId: parseInt(accordionId),
            rating: values.rating,
            author: values.author,
            text: values.commentText
        };
        console.log(comment);
        setModalOpen(false);
    }

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add Comment
                </ModalHeader>
                <ModalBody>
                    <Formik initialValues={{
                        rating: undefined, 
                        author: "", 
                        commentText: ""}} 
                        onSubmit={() => handleSubmit()}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor="rating">
                                    Rating
                                </Label>
                                <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Field>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="Author">
                                    Author
                                </Label>
                                <Field 
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                />
                            </FormGroup>

                            <FormGroup htmlFor="commentText">
                                <Label>
                                    Comment
                                </Label>
                                <Field 
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );

}

export default CommentForm;