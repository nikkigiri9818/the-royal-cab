import Image from "next/image";
import Link from "next/link";

type OneWayCardProps = {
  tour: {
    slug: string;
    title: string;
    image: string;
    rating: string;
    duration: string;
    startCity: string;
    destination: string;
    price: string;
    shortDescription: string;
  };
};

const OneWayCard = ({ tour }: OneWayCardProps) => {
  return (
    <Link
      href={`/one-way-tours/${tour.slug}`}
      className="one-way-card"
    >

      <div className="one-way-image">

        <Image
          src={tour.image}
          alt={tour.title}
          fill
        />

        <div className="image-overlay" />

        <div className="rating">
          ★ {tour.rating}
        </div>

        <div className="route-badge">
          {tour.startCity} → {tour.destination}
        </div>

      </div>


      <div className="one-way-content">

        <div className="card-meta">

          <span>
            {tour.duration}
          </span>

          <span>
            One Way
          </span>

        </div>

        <h3>
          {tour.title}
        </h3>

        <p>
          {tour.shortDescription}
        </p>

        <div className="card-bottom">

          <strong>
            {tour.price}
          </strong>

          <span>
            View Details →
          </span>

        </div>

      </div>


      <style>{`

        .one-way-card {
          display: block;
          overflow: hidden;
          height: 100%;
          background: #fff;
          border: 1px solid #eee8f7;
          border-radius: 16px;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 8px 30px rgba(50,20,80,.07);
          transition: all .35s ease;
        }

        .one-way-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 45px rgba(50,20,80,.14);
        }

        .one-way-image {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .one-way-image img {
          object-fit: cover;
          transition: transform .5s ease;
        }

        .one-way-card:hover .one-way-image img {
          transform: scale(1.07);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(20,5,50,.65),
            transparent 60%
          );
        }

        .rating {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 7px 12px;
          border-radius: 20px;
          background: #fff;
          color: #3F0AA8;
          font-size: 13px;
          font-weight: 800;
        }

        .route-badge {
          position: absolute;
          bottom: 15px;
          left: 15px;
          padding: 8px 13px;
          border-radius: 7px;
          background: #FF9D00;
          color: #fff;
          font-size: 12px;
          font-weight: 800;
        }

        .one-way-content {
          padding: 22px;
        }

        .card-meta {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 9px;
        }

        .card-meta span {
          color: #FF9D00;
          font-size: 12px;
          font-weight: 800;
        }

        .one-way-content h3 {
          margin: 0 0 10px;
          color: #252331;
          font-size: 20px;
          line-height: 1.35;
        }

        .one-way-content p {
          min-height: 50px;
          margin: 0 0 18px;
          color: #777;
          font-size: 14px;
          line-height: 1.65;
        }

        .card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-top: 15px;
          border-top: 1px solid #eee;
        }

        .card-bottom strong {
          color: #5B10E8;
          font-size: 15px;
        }

        .card-bottom span {
          color: #FF9D00;
          font-size: 13px;
          font-weight: 800;
        }

      `}</style>

    </Link>
  );
};

export default OneWayCard;