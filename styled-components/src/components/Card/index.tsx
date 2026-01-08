import React from 'react'
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';
import { FiThumbsUp } from 'react-icons/fi';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://hermes.dio.me/articles/cover/6b80c896-de70-41eb-8fca-6a630d7ea8d2.jpg' />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/82729028?v=4' />
                <div>
                    <h4>Andrelon de Souza</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curo de HTML e CSS</h4>
                <p>Projeto feito o curso de HTML e CSS no bootcamp DIO do Global avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
      
    </CardContainer>
  )
}

export { Card };