import axios from "axios";

//Import default React no braces, import useState with braces because package react it is named import
import React, {useState} from "react";
import { Wrapper, Content, Form } from "./Login/Login.styles";


//Process the input and the state inside this ImageForm Component thus use braces {}
const ImageForm = () => {

    //set initial state, create the variable to hold the value and its setter
    const [imageFile, setImageFile] = useState(null);

    //Handle change
    const onFileChange = (e) => {
        console.log(e.target.files[0])
        //set the imageFile value using its setter
        setImageFile(e.target.files[0])
        console.log(imageFile)
    }

    //Handle submit
    const handleSubmit = async e => {
        e.preventDefault();       

        //build formdata
        let formData = new FormData();

        //build body, insert the key and value pair of the body
        formData.append('banner', imageFile)

        //header config
        const config = {
            headers : {
                'content-type':'multipart/form-data'
            }
        }

        //send it with axios
        axios.post("https://savetheeze.herokuapp.com/api/banner/", formData, config)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        })
    }


    //Return the component using return function
    return (
        <Wrapper>
            <Content>
                <h1>Upload your Image</h1>
                <Form encType="multipart/form-data" onSubmit={handleSubmit}>                
                    <label htmlFor="image"> Image </label>
                    <input 
                        type="file"
                        name="image" 
                        id="image" 
                        onChange={onFileChange}
                    />
                    <input type="submit" value="Upload" />            
                </Form>
            </Content>
        </Wrapper>
    )
}

export default ImageForm;