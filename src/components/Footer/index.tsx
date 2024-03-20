import img from '../../assets/B2Blue_Logo_borda_branca.png';
import { Container, Content } from './styles';

export function Footer() {
    return (
        <Container>

            <Content>
                <img src={img} alt='fazai' />
            </Content>

            <Content>
                <p><strong>Desenvolvido por: </strong>Jamilly Pinheiro</p>
            </Content>

        </Container>
    );
}