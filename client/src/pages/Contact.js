import { Button } from "../components/Button"
import styled from "styled-components";

export default function Contact() {
    return (
        <ContactContainer>
            <h1>Hubungi Admin</h1>
            <a href='https://wa.me/+6285157129293' target='_blank' className='btn-mobile'>
                <div className='button-container' >
                    <Button backgroundColor="var(--color-green)" >
                        <i class='fab fa-whatsapp' /> WhatsApp
                    </Button>
                </div>
            </a>
        </ContactContainer>
    )
};

const ContactContainer = styled.div`
    .button-container > h1 {
        color: #fff;
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
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    object-fit: contain;
    text-decoration: none;


`;