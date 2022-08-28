import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown, faHardDrive } from '@fortawesome/free-solid-svg-icons'
// import Lightbox from 'lightbox-react';
// import 'lightbox-react/style.css';

import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

function App() {
  const [open, setOpen] = useState(false)
  const [photo, setPhoto] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);

  var settingsHero = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let images = [
    {
      url: "/img/img1.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 1"
    },
    {
      url: "/img/img2.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 2"
    },
    {
      url: "/img/img3.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 3"
    },
    {
      url: "/img/img4.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 4"
    },
    {
      url: "/img/img5.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 5"
    },
    {
      url: "/img/img6.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 6"
    },
    {
      url: "/img/img7.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 7"
    },
    {
      url: "/img/img8.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 8"
    },
    {
      url: "/img/img9.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 9"
    },
    {
      url: "/img/img10.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 10"
    },
    {
      url: "/img/img11.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 11"
    },
    {
      url: "/img/img12.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 12"
    },
    {
      url: "/img/img13.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 13"
    },
    {
      url: "/img/img14.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 14"
    },
    {
      url: "/img/img15.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 15"
    },
    {
      url: "/img/img16.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 16"
    },
    {
      url: "/img/img17.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 17"
    },
    {
      url: "/img/img18.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 18"
    },
    {
      url: "/img/img19.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 19"
    },
    {
      url: "/img/img20.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 20"
    },
    {
      url: "/img/img21.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 21"
    },
    {
      url: "/img/img22.jpg",
      title: "Semarak Kemerdekaan Indonesia 77 - Gambar 22"
    },
  ]

  return (
    <>
      <div className='min-h-screen bg-gradient-to-t from-red-500 to-red-700 relative'>
        <div className='flex items-center sticky top-0 p-8 w-full bg-red-700 z-50 shadow-lg'>
          <div className='container mx-auto '>
            <img src='/img/logo.png' alt='' className='w-20 lg:w-40' />
          </div>
        </div>
        <div className='container mx-auto flex flex-col-reverse lg:flex-row p-8'>
          <div className='lg:w-6/12 flex flex-col justify-center'>
            <div>
              <p className='text-3xl md:text-4xl lg:text-6xl text-white font-extrabold mb-5 text-center lg:text-left'>Semarak Kemerdekaan Republik Indonesia ke-77</p>
              <p className='text-2xl lg:text-4xl font-bold text-white mb-4 text-center lg:text-left'>Pesta Rakyat Kelurahan Darma</p>
              <p className='text-white mb-20 text-center lg:text-left'>Polewali Mandar, Sulawesi Barat</p>
            </div>
            <div className='z-50'>
              <Slider {...settingsHero}>
                {
                  images.map((image, i) => (
                    <div className='rounded-lg'>
                      <img
                        src={image.url}
                        alt={image.title}
                        className='h-44 lg:h-52 w-96 md:w-52 lg:w-56 lg:rounded-md object-cover object-top hover:cursor-zoom-in'
                        onClick={() => {
                          setPhoto(i)
                          setOpen(true)
                        }}
                      />
                    </div>
                  ))
                }
              </Slider>
              <div className='mt-4 text-center lg:text-left'>
                <p className='text-white mb-8'>Silahkan Download Seluruh file kegiatan pada tombol dibawah</p>
                <div className='flex flex-col lg:flex-row'>
                  <a href="https://drive.google.com/drive/folders/1HsSdVZTv0d0Dzh8_ffwjwxV1x2sYMj38?usp=sharing" target="_blank" rel="noreferrer"
                    className='hover:bg-white p-4 rounded-full px-10 border-2 hover:border-white hover:text-red-600 bg-red-600 hover:shadow-lg text-white transition-all delay-75 mr-2 mb-2'
                  ><FontAwesomeIcon icon={faHardDrive} className='mr-4' /> Lihat di Google drive</a>
                  <a href="https://doc-4o-34-drive-data-export.googleusercontent.com/download/ifla1t2e1i9jv4vmgfvdpjnte3o4s0d5/alh0dphrvi072vu4d38bpq7ojpesvi2j/1661656500000/0338ba11-0a7b-4dff-9ed7-9597e4190677/108980610338026681203/ADt3v-ORXsxN7qVtHX0Xbzojhmx7b7HOtMO0MsY0V-YwLGFlf_Iy9u3_sYBaUTLpM8Ec-yJqMgkBFDbQamh_yx__oSuXrBhdq5bHkOQLLfVGL0dessdtcqWuN0U4WUqztSKKEz3Bz2Vl6iMpjMk2M6DUcRIdgsKjnz2DRI84lazcO0N9BcW7Y6z9c4uBHHf8lAtR-Cp1mabVnp9Gm-kc-ckkSGOj_br_5l3foqH7tdyiS1Cb2vOQM-KvBfcvTWEXRW15x21A25ze_sMrTDSkoLr0dnVg2NsFpEHKiv9vIJPyMjXMtL4lDRxfxik_OuFP9C39J7qlfgvd?authuser=0&nonce=h02dl6hfscf84&user=108980610338026681203&hash=oacgf1qa7s62g0sq0311c77oj2sqfk29" rel="noreferrer"
                    className='bg-white p-4 rounded-full px-10 border-2 border-white text-red-600 hover:bg-red-600 hover:shadow-lg hover:text-white transition-all delay-75 mr-2 mb-2'
                  ><FontAwesomeIcon icon={faCloudArrowDown} className='mr-4' /> Download Gallery</a>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-6/12'>
            <div data-aos='fade-up'>
              <img src='/img/banner-bg.png' alt='' width="100%" />
            </div>
          </div>
        </div>
        <div className='text-center w-full pb-8 pt-10 lg:pt-0'>
          <p className='text-white'>&copy; Kelurahan Darma | 2022</p>
        </div>
      </div>
      {open && (
        <Lightbox
          startIndex={photo}
          images={images}
          onClose={() => {
            setOpen(false)
          }} />
      )}
    </>
  )
}

export default App