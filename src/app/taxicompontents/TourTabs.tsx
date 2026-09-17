"use client";

import { useState } from "react";

type ItineraryItem = {
  title?: string;
  description?: string;
};

type TourTabsProps = {
  overview?: string;
  overviewExtra?: string;

  itinerary?: ItineraryItem[];

  inclusions?: string[];

  exclusions?: string[];
};

const TourTabs = ({
  overview = "",
  overviewExtra = "",
  itinerary = [],
  inclusions = [],
  exclusions = [],
}: TourTabsProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    {
      id: "overview",
      label: "Overview",
    },
    {
      id: "itinerary",
      label: "Itinerary",
    },
    {
      id: "inclusion",
      label: "Inclusion",
    },
    {
      id: "exclusion",
      label: "Exclusion",
    },
  ];

  return (
    <div className="tour-tabs-wrapper">

      {/* ================= TABS ================= */}

      <div className="tour-tabs">

        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}

      </div>


      {/* =====================================================
          OVERVIEW
      ====================================================== */}

      {activeTab === "overview" && (
        <div className="tab-content">

          <h2>Overview</h2>

          {overview ? (
            <p>{overview}</p>
          ) : (
            <p className="no-content">
              Overview information is not available.
            </p>
          )}

          {overviewExtra && (
            <p>{overviewExtra}</p>
          )}

        </div>
      )}


      {/* =====================================================
          ITINERARY
      ====================================================== */}

      {activeTab === "itinerary" && (
        <div className="tab-content">

          <h2>Itinerary</h2>

          {itinerary.length > 0 ? (

            <div className="itinerary-list">

              {itinerary.map((day, index) => (
                <div
                  className="itinerary-item"
                  key={index}
                >

                  <div className="day-number">
                    Day {index + 1}
                  </div>

                  <div className="day-content">

                    <h3>
                      {day.title || `Day ${index + 1}`}
                    </h3>

                    {day.description && (
                      <p>
                        {day.description}
                      </p>
                    )}

                  </div>

                </div>
              ))}

            </div>

          ) : (

            <p className="no-content">
              Itinerary information is not available.
            </p>

          )}

        </div>
      )}


      {/* =====================================================
          INCLUSION
      ====================================================== */}

      {activeTab === "inclusion" && (
        <div className="tab-content">

          <h2>Inclusion</h2>

          {inclusions.length > 0 ? (

            <div className="simple-list">

              {inclusions.map((item, index) => (
                <div
                  className="list-item"
                  key={index}
                >

                  <span>✓</span>

                  <p>
                    {item}
                  </p>

                </div>
              ))}

            </div>

          ) : (

            <p className="no-content">
              Inclusion information is not available.
            </p>

          )}

        </div>
      )}


      {/* =====================================================
          EXCLUSION
      ====================================================== */}

      {activeTab === "exclusion" && (
        <div className="tab-content">

          <h2>Exclusion</h2>

          {exclusions.length > 0 ? (

            <div className="simple-list">

              {exclusions.map((item, index) => (
                <div
                  className="list-item exclusion"
                  key={index}
                >

                  <span>×</span>

                  <p>
                    {item}
                  </p>

                </div>
              ))}

            </div>

          ) : (

            <p className="no-content">
              Exclusion information is not available.
            </p>

          )}

        </div>
      )}


      {/* =====================================================
          CSS
      ====================================================== */}

      <style>{`

        .tour-tabs-wrapper {
          width: 100%;
        }


        /* ================= TABS ================= */

        .tour-tabs {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #F4EEFF;
          border-radius: 14px;
          padding: 6px;
          margin-bottom: 35px;
          gap: 5px;
        }

        .tour-tabs button {
          border: none;
          outline: none;
          background: transparent;
          color: #3F0AA8;
          padding: 17px 15px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all .3s ease;
        }

        .tour-tabs button:hover {
          background: rgba(91, 16, 232, .10);
        }

        .tour-tabs button.active {
          background: #5B10E8;
          color: #fff;
          box-shadow: 0 7px 18px rgba(91, 16, 232, .20);
        }


        /* ================= CONTENT ================= */

        .tab-content {
          min-height: 260px;
          animation: tabFade .3s ease;
        }

        @keyframes tabFade {

          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        .tab-content h2 {
          margin: 0 0 25px;
          color: #252331;
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
        }

        .tab-content > p {
          margin: 0 0 18px;
          color: #666;
          font-size: 16px;
          line-height: 1.8;
        }


        /* ================= NO CONTENT ================= */

        .no-content {
          color: #888 !important;
          font-size: 15px !important;
        }


        /* ================= ITINERARY ================= */

        .itinerary-list {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .itinerary-item {
          display: grid;
          grid-template-columns: 85px 1fr;
          gap: 25px;
          padding: 22px 0;
          border-bottom: 1px solid #eee;
        }

        .itinerary-item:first-child {
          padding-top: 0;
        }

        .day-number {
          color: #5B10E8;
          font-size: 15px;
          font-weight: 800;
          padding-top: 2px;
        }

        .day-content h3 {
          margin: 0 0 8px;
          color: #252331;
          font-size: 19px;
          font-weight: 700;
        }

        .day-content p {
          margin: 0;
          color: #666;
          font-size: 15px;
          line-height: 1.7;
        }


        /* ================= INCLUSION ================= */

        .simple-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .list-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 9px 0;
        }

        .list-item span {
          flex-shrink: 0;
          width: 23px;
          height: 23px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #F4EEFF;
          color: #5B10E8;
          font-size: 14px;
          font-weight: 800;
        }

        .list-item p {
          margin: 0;
          color: #666;
          font-size: 16px;
          line-height: 1.6;
        }


        /* ================= EXCLUSION ================= */

        .list-item.exclusion span {
          background: #fff1eb;
          color: #e45b00;
        }


        /* ================= MOBILE ================= */

        @media (max-width: 767px) {

          .tour-tabs {
            grid-template-columns: repeat(2, 1fr);
          }

          .tour-tabs button {
            padding: 13px 8px;
            font-size: 14px;
          }

          .tab-content h2 {
            font-size: 27px;
          }

          .tab-content > p {
            font-size: 15px;
          }

          .itinerary-item {
            grid-template-columns: 1fr;
            gap: 7px;
          }

          .day-number {
            font-size: 14px;
          }

          .list-item p {
            font-size: 15px;
          }

        }

      `}</style>

    </div>
  );
};

export default TourTabs;