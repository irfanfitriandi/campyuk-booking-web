import { Link, useNavigate } from "react-router-dom";

import { Btn } from "./Button";
import { ImLocation } from "react-icons/im";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import { GiCampingTent } from "react-icons/gi";

interface CardCampProps {
  image: string;
  campsite: string;
  price: number;
  loc: string;
  distance: number;
}

export function CardCampList({
  campsite,
  image,
  loc,
  price,
  distance,
}: CardCampProps) {
  return (
    <div className="flex flex-col bg-bgcard border-2 rounded-3xl shadow-lg max-w-2xl">
      <img className="rounded-t-3xl" src={image} alt={image} />
      <div className="flex justify-between p-4">
        <div className="flex flex-col">
          <h1>{campsite}</h1>
          <p className="flex items-center">
            <ImLocation /> {loc}
          </p>
          <br />
          <p>{distance} km away from the city centre</p>
        </div>
        <div className="flex flex-col justify-between">
          <h1>$ {price} /night</h1>
          <Link to="/camp/:id_camp">
            <Btn id="btn-detail" label="Check!" />
          </Link>
        </div>
      </div>
    </div>
  );
}

interface CardHistoryProps {
  image: string;
  campsite: string;
  loc: string;
  checkin: string;
  checkout: string;
  eticket: string;
  totalprice: number;
  status: string;
}

export function CardHistory({
  campsite,
  image,
  loc,
  totalprice,
  checkin,
  checkout,
  eticket,
  status,
}: CardHistoryProps) {
  return (
    <div className="flex flex-col lg:flex-row bg-bgcard border-2 rounded-3xl shadow-lg">
      <img
        className="rounded-t-2xl lg:rounded-l-3xl lg:w-2/3"
        src={image}
        alt={image}
      />
      <Link
        id="detail-history"
        to="/booking/:id_booking"
        className="flex flex-col p-4 justify-evenly lg:w-1/3 cursor-pointer"
      >
        <div>
          <h1 className="text-2xl">{campsite}</h1>
          <p className="flex items-center">
            <ImLocation /> {loc}
          </p>
        </div>
        <div>
          <h1 className="text-2xl">Dates</h1>
          <p>
            {checkin} - {checkout}
          </p>
        </div>
        <div>
          <h1 className="text-2xl">E-Ticket</h1>
          <p>{eticket}</p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-3xl text-end">$ {totalprice}</h1>
          <p className="bg-primary text-bgcard text-center rounded-3xl p-2">
            {status}
          </p>
        </div>
      </Link>
    </div>
  );
}

interface CardHostProps {
  image: string;
  campsite: string;
  loc: string;
  price: number;
  status: string;
}

export function CardHost({
  campsite,
  image,
  loc,
  price,
  status,
}: CardHostProps) {
  function handleDelete() {}

  return (
    <div className="flex flex-col bg-bgcard border-2 rounded-3xl shadow-lg max-w-2xl">
      <Link id="detail-camphost" to="/camp-host/:id_camp">
        <img className="rounded-t-3xl" src={image} alt={image} />
      </Link>
      <div className="flex justify-between p-4">
        <div className="flex flex-col">
          <h1>{campsite}</h1>
          <p className="flex items-center">
            <ImLocation /> {loc}
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <h1 id="camp-title">$ {price} /night</h1>
          <br />
          <p id="status" className="bg-primary text-bgcard text-center rounded-3xl p-2">
            {status}
          </p>
        </div>
      </div>
      <div className="flex justify-between text-4xl p-4">
        <Link id="btn-edit" to="/edit-camp/:id_camp">
          <HiOutlinePencilAlt />
        </Link>
        <HiOutlineTrash
          id="btn-delete"
          className="text-btn cursor-pointer"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
interface CardSAdminProps {
  image: string;
  campsite: string;
  loc: string;
  address: string;
  id_camp: number;
  price: number;
}

export function CardSAdmin({
  campsite,
  image,
  loc,
  price,
  address,
  id_camp,
}: CardSAdminProps) {
  return (
    <div className="flex flex-col lg:flex-row bg-bgcard border-2 rounded-3xl shadow-lg">
      <img
        className="rounded-t-2xl lg:rounded-l-3xl lg:w-2/3"
        src={image}
        alt={image}
      />
      <div className="flex flex-col p-4 justify-evenly lg:w-1/3">
        <div>
          <h1 className="text-2xl">{campsite}</h1>
          <p className="flex items-center">
            <ImLocation /> {loc}
          </p>
        </div>
        <div>
          <h1 className="text-2xl">Address</h1>
          <p>{address}</p>
        </div>
        <div>
          <h1 className="text-2xl">Camp Id</h1>
          <p>{id_camp}</p>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">$ {price} /night</h1>
          <Link to="/detail-admin/:id_camp">
            <Btn id="btn-check" className="w-18" label="Check" />
          </Link>
        </div>
      </div>
    </div>
  );
}

interface CardOrderProps {
  image: string;
  campsite: string;
  loc: string;
  price: number;
}

export function CardOrder({
  campsite,
  image,
  loc,
  price,
}: CardOrderProps) {
  return (
    <div className="px-20 pt-10">
      <div className="flex  bg-white rounded-2xl h-80">
        <div className="flex-row w-3/5 ">
          <img
            className="rounded-t-2xl lg:rounded-l-3xl lg:w-full h-80 "
            src={image}
            alt={image}
          />
        </div>
        <div className="flex-row w-2/5 px-10">
          <div className="flex flex-col pt-10">
            <h1 className="font-bold text-2xl">{campsite}</h1>
            <div className="flex flex-row">
              <ImLocation className="w-8 h-8" /> {loc}
            </div>
            <div className="flex flex-col pt-10">
              <h1 className="font-bold text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Rem
              </h1>
            </div>

            <h1 className="text-3xl text-end pt-10">
              $ {price}/night
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
