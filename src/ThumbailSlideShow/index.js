import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './styles.css';
import { Box, CardMedia, CardContent } from '@mui/material';
 function ThumbnailSlideshow(props) {
    const { data } = props;
    console.log("slides data", data)
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const slides = props.data.map(item => {
        return <SwiperSlide>
            <CardMedia
                component="img"
                src={item.image}
                alt="Paella dish"
                width='100%'
            />
        </SwiperSlide>
    })
    return (
        <>
            <Box justifyContent="center" sx={{ objectFit: "fill", height: '600px', width: '100%', paddingLeft: '5px', paddingRight: '-1px', paddingTop: '25px', paddingBottom: '1px', display: "flex", imageRepeat: "no-repeat" }}>
                <Swiper
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        style: 'color:white',
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">
                    {slides}
                </Swiper>
            </Box>
        </>
    )
}

export default ThumbnailSlideshow;