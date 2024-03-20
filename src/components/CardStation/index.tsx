
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { Content, Container } from './styles';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface CardStationProps {
  value: number;
  stationName: string;
}

export default function CardStation({ value, stationName }: CardStationProps) {
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (confirmed) {
      toast.info("Coleta confirmada!", {
        position: "top-right",
      })
    }
  }, [confirmed])

  return (
    <Container>
      <Card sx={{ maxWidth: 350 }}>
        <CardHeader
          avatar={
            <Avatar sx={value < 80 || confirmed ? { bgcolor: '#FF6961' } : { bgcolor: '#90EE90' }}>
              <p style={{ fontSize: '15px', fontWeight: 'bold' }}>{confirmed ? 0 : value}%</p>
            </Avatar>
          }
          title={stationName}
        />
        <Content>
          <Button
            variant='contained'
            color='success'
            disabled={value < 80 || confirmed && true}
            onClick={() => setConfirmed(true)}
          >
            Confirmar coleta
          </Button>
        </Content>
      </Card>
    </Container>

  );
}