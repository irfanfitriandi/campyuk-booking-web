import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import axios from "axios";
import { ReactImageCarouselViewer } from "react-image-carousel-viewer";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

import "leaflet/dist/leaflet.css";
import tileLayer from "../../utils/const/tileLayer";

import { Layout } from "../../components/Layout";
import { GiPositionMarker } from "react-icons/gi";
import { CampTypes } from "../../utils/types/campsTypes";

function DetailCampHost() {
  const content =
    "https://images.unsplash.com/photo-1632714395151-aa853eac30e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80";

  const position: LatLngExpression = [-6.8853, 107.61373];

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const images = [
    {
      src: "https://images.tokopedia.net/img/JFrBQq/2022/6/22/307bcc9a-8564-49d9-999f-d47e7141320a.jpg",
    },
    {
      src: "https://images.tokopedia.net/img/JFrBQq/2022/6/22/56110566-f35c-43e4-93e3-b3ba554f0118.jpg",
    },
    {
      src: "https://images.tokopedia.net/img/JFrBQq/2022/6/22/307bcc9a-8564-49d9-999f-d47e7141320a.jpg",
    },
    {
      src: "https://images.tokopedia.net/img/JFrBQq/2022/6/22/56110566-f35c-43e4-93e3-b3ba554f0118.jpg",
    },
  ];

  const [detailcamp, setDetail] = useState<CampTypes[]>([]);
  const [cookie, setCookies] = useCookies();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchDetail();
  }, []);

  function fetchDetail() {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .get(`https://abiasa.site/camps/${id}`, config)
      .then((res) => {
        console.log("data detail", res);
        const { data } = res.data.data;
        setDetail(data);
      })
      .catch((err) => {});
  }

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row p-5 gap-5 justify-center">
        <div className="lg:w-4/6">
          <img src={content} alt="" className="w-full h-96 rounded-lg" />
        </div>
        <div className="hidden lg:block w-2/6">
          <div className="flex flex-col gap-5 h-full">
            <img src={content} alt="" className="w-full h-1/2 rounded-lg" />
            <div className="flex h-full gap-5">
              <img src={content} alt="" className="w-[48%] rounded-lg" />

              <img
                src={content}
                alt=""
                id="more-image"
                className="w-[48%] rounded-lg static"
                onClick={() => {
                  setIndex(index);
                  setIsOpen(true);
                }}
              />

              <p className="absolute right-16 items-center text-2xl font-bold opacity-75 py-10 text-white">
                More image
              </p>

              <ReactImageCarouselViewer
                open={isOpen}
                onClose={() => setIsOpen(false)}
                images={images}
                startIndex={index}
              />
            </div>
          </div>
        </div>
      </div>

      {detailcamp.map((data) => (
        <div className="flex pt-10">
          <div>
            <div className="flex-row w-1/4 px-10">
              <h1 className="font-bold text-2xl pb-3">{data.title}</h1>
              <div className="flex flex-rows pb-3">
                <GiPositionMarker className="w-8 h-8" />
                <span className="font-semibold text-xl">{data.city}</span>
              </div>
              <p className="font-semibold text-xl pb-3">
                {data.distance} away from the city centre
              </p>
              <p className="font-bold text-3xl pb-3">
                $ 60{" "}
                <span className="font-normal text-xl">{data.price}/night</span>
              </p>
            </div>
            <div className="flex-row w-3/4 px-20">
              <p className="text-xl">{data.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 px-10 pt-10">
            <div className="flex flex-col">
              <h1 className="font-bold text-4xl pb-3">Tent</h1>
              <p className="font-semibold text-xl pb-3">{data.items[0].name}</p>
              <p className="font-semibold text-xl pb-3">Medium (3-4 person) </p>
              <p className="font-semibold text-xl pb-3">Large (4-5 person) </p>
            </div>
            <div>
              <h1 className="font-bold text-4xl pb-3">Stock</h1>
              <p className="font-semibold text-xl pb-3 px-8">
                {data.items[0].stock}
              </p>
              <p className="font-semibold text-xl pb-3 px-8">4</p>
              <p className="font-semibold text-xl pb-3 px-8">4</p>
            </div>

            <div>
              <h1 className="font-bold text-4xl pb-3">Price</h1>
              <p className="font-semibold text-xl pb-3 px-8">
                {data.items[0].rent_price}
              </p>
              <p className="font-semibold text-xl pb-3 px-8">$10</p>
              <p className="font-semibold text-xl pb-3 px-8">$12</p>
            </div>
            <div className="mr-8">
              <img
                src={content}
                alt=""
                id="more-image"
                className="w-80 rounded-lg absolute"
                onClick={() => {
                  setIndex(index);
                  setIsOpen(true);
                }}
              />
              <p className="inline-block py-16 px-16 text-2xl font-bold opacity-75 text-white">
                More image
              </p>

              <ReactImageCarouselViewer
                id="carousel"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                images={images}
                startIndex={index}
              />
            </div>
          </div>
          <h1 className="px-10 py-5 text-2xl font-bold">Available Add On</h1>
          <div className="flex flex-col lg:flex-row gap-10 px-10">
            <div>
              <h1 className="text-lg mb-2">{data.items[1].name}</h1>
              <p>{data.items[1].stock}</p>
              <p>{data.items[1].rent_price}</p>
            </div>
            <div>
              <h1 className="text-lg mb-2">{data.items[2].name}</h1>
              <p>{data.items[0].stock}</p>
              <p>{data.items[0].rent_price}</p>
            </div>
          </div>
          <div className="flex px-10 pt-10">
            <div className="flex-row w-1/2">
              <MapContainer
                center={position}
                zoom={20}
                scrollWheelZoom={true}
                style={{ height: "400px" }}
              >
                <TileLayer {...tileLayer} />
                <Marker position={position}>
                  <Popup>Center Warsaw</Popup>
                </Marker>
              </MapContainer>
            </div>
            <div className="flex-row w-1/2 py-10">
              <p className="text-3xl px-10 ">{data.address}</p>
              <h1 className="font-bold text-4xl pt-40 text-end">Accept</h1>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  );
}

export default DetailCampHost;
