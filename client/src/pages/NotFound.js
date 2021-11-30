import { Link } from "react-router-dom"
import styled from "styled-components"
import { Button } from "../components/Button"

export default function NotFound() {
    return (
        <NotFoundContainer>
            <h1>404 - Not Found!</h1>
            <Link to="/" className='btn-mobile'>
                <div className='button-container' >
                    <Button backgroundColor="var(--color-blue)" >
                        Go Back To Home
                    </Button>
                </div>
            </Link>
        </NotFoundContainer>
    )
};
  
const NotFoundContainer = styled.div`
    .button-container > Button {
        padding: 12px 12px;
    }

    h1 {
        color: #ffffff;
        font-size: 90px;
    }

    .button-container > h1 {
        color: #ffffff;
        font-size: 100px;
        margin-top: 100px;
        text-decoration: none;
    }

    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-blue);
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    object-fit: contain;
    text-decoration: none;

`;