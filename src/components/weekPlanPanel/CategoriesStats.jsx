import React from "react";
import { useEffect, useState } from "react";
import { getSetCount } from "../../utils/exerciseTemplate";
import "./CategoriesStats.css";

export const CategoriesStats = (props) => {
  const { user, trainingsString, updateSets } = props;
  const [stats, setStats] = useState([]);

  const getStats = async () => {
    if (trainingsString.length > 0) {
      const data = await getSetCount(user.token, trainingsString);
      console.log(data.setsCount);
      setStats(data.setsCount);
    }
  };

  useEffect(() => {
    getStats();
  }, [trainingsString, updateSets]);

  return (
    <div className="categoriesStats-wrapper">
      {stats.map((item, index) => {
        return (
          <div key={index} className="categoriesStats-item-wrapper">
            <p className="categoriesStats-content">
              {item.category}:{" "}
              <span className="categoriesStats-sets-content">{item.sets}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};
