import "./../scss/components/_categories.scss";
import React, {useState} from "react";

function Categories() {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className="categories">
              <ul>
                <li className="active">Все</li>
                <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li>
              </ul>
            </div>
  )
}

export default Categories;