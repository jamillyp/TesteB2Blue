import { useState } from "react";
import CardStation from "../../components/CardStation";
import Form from "../../components/Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    Container,
    Content,
    ContentBody,
    Title
} from "./styles";
import { Footer } from "../../components/Footer";

export default function Dashboard() {
    const [stationOne, setStationOne] = useState<any>('');
    const [stationTwo, setStationTwo] = useState<any>('');
    const [stationThree, setStationThree] = useState<any>('');

    const data = [
        { stationName: 'Estação 1', value: stationOne },
        { stationName: 'Estação 2', value: stationTwo },
        { stationName: 'Estação 3', value: stationThree }
    ];

    function handleChange(value: any, stationName: any) {
        stationName === 'Estação 1' && setStationOne(parseInt(value));
        stationName === 'Estação 2' && setStationTwo(parseInt(value));
        stationName === 'Estação 3' && setStationThree(parseInt(value));

        if (value >= 80) {
            console.log("Pedido de coleta gerado automaticamente");
            toast.success("Pedido de coleta gerado automaticamente, confirme a coleta!", {
                position: "top-right",
            });
        }
        const aux: any = 80 - value;
        if (value < 80) {
            toast.warn("Pedido incompleto, volume esperado é de 80%, faltam: " + aux + "%", {
                position: "top-right",
            })
        }
    }

    return (
        <Container>
            <ToastContainer />

            <Title>
                <p>Sistema de controle de volume de armazenamento de estações</p>
            </Title>
            <ContentBody>
                <Content>
                    {
                        data.map((item: any) =>
                            <CardStation
                                key={item.stationName}
                                stationName={item.stationName}
                                value={
                                    (item.stationName === 'Estação 1' && stationOne) ||
                                    (item.stationName === 'Estação 2' && stationTwo) ||
                                    (item.stationName === 'Estação 3' && stationThree)
                                }
                            />
                        )
                    }

                </Content>
                <Content>
                    {
                        data.map((item: any) => <Form
                            key={item.stationName}
                            stationName={item.stationName}
                            handleChange={handleChange} />)
                    }
                </Content>
                <Footer />
            </ContentBody>
        </Container>
    )
}