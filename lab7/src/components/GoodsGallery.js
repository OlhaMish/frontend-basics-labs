import React from 'react';
import GoodsCard from './GoodsCard';
import ToKillAMockingbird from '../assets/img/ToKillAMockingbird.jpg';
import FlowersForAlgernon from '../assets/img/FlowersForAlgernon.jpg';
import NeverLetMeGo from '../assets/img/NeverLetMeGo.jpg';
import TheCatcherInTheRye from '../assets/img/TheCatcherInTheRye.jpg';
import OneHundredYearsOfSolitude from '../assets/img/OneHundredYearsOfSolitude.jpg';
import TheHitchhikersGuidetotheGalaxy from '../assets/img/TheHitchhikersGuidetotheGalaxy.jpg';
import Pachinko from '../assets/img/Pachinko.jpg';
import MemoirsOfAGeisha from '../assets/img/MemoirsOfAGeisha.jpg';

const goods = [
  {
    image: ToKillAMockingbird,
    name: 'To Kill a Mockingbird',
    price: 11.99
  },
  {
    image: FlowersForAlgernon,
    name: 'Flowers for Algernon',
    price: 7.60
  },
  {
    image: OneHundredYearsOfSolitude,
    name: 'One Hundred Years of Solitude',
    price: 10.95
  },
  {
    image: Pachinko,
    name: "Pachinko",
    price: 11.99
  },
  {
    image: TheCatcherInTheRye,
    name: 'The Catcher in the Rye',
    price: 5.72
  },
  {
    image: NeverLetMeGo,
    name: 'Never Let Me Go',
    price: 13.49
  },
  {
    image: TheHitchhikersGuidetotheGalaxy,
    name: "The Hitchhiker's Guide to the Galaxy",
    price: 13.50
  },
  {
    image: MemoirsOfAGeisha,
    name: "Memoirs of a Geisha",
    price: 14.90
  }

];

const GoodsGallery = () => {
  return (
    <div className="goods-gallery">
      {goods.map((item, index) => (
        <GoodsCard
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default GoodsGallery;
