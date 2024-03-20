import logo from '../../assets/B2Blue_Logo_borda_branca.png';

import {
    Container,
    Logo,
    Image,
} from "./styles";

export default function Header() {

    return (
        <Container>
            <Logo>
                <Image src={logo} alt="b2blue-logo" />
            </Logo>
        </Container>
    )
}