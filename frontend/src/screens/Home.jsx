import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const  [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    //  console.log(response[0],response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        {" "}
        <Navbar />{" "}
      </div>
      <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
              />
             
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://cdn-rdb.arla.com/lurpak-uk/ham-and-cheese-sandwich/310112559.jpg?w=1920&h=1080&mode=max&ak=64bfe437&hm=a2061b7d"
              className="d-block w-100"
              style={{
                filter: "brightness(50%)",
                objectFit: "Fill", 
                height: "500px", 
              }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/the-infatuation/image/upload/q_auto,f_auto/cms/Carousel_Wine_Bar_Group_Pie_Aleksandra_Boruch_London-3"
              className="d-block w-100"
              style={{
                filter: "brightness(50%)",
                objectFit: "cover ",
                height: "500px",
              }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://dukaan.b-cdn.net/1000x1000/webp/4338846/1f4ed201-cae3-41e6-90b8-319709966f5f/veg-momos-529f50c1-d9ef-4a48-b7b7-362e50686264.JPG"
              className="d-block w-100"
              style={{
                filter: "brightness(50%)",
                objectFit: "Fill ",
                height: "500px",
              }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        
        <Carousal />
      </div>

      <div className="container ">
        {!foodCat == []
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    
                    {data.CategoryName}
                  </div>
                  <hr />

                  {!foodItem == [] 
                  ? 
                    
                  foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
                      .map(filterItems=> {
                        return (
                          <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                            <Card foodItem= {filterItems}
                             options={filterItems.options[0]}
                             
                             
                            
                            
                            
                            ></Card>
                          </div>
                        )
                      }
                      )
                   :  
                    <div> No Such Data Found</div>
                  }
                </div>
              )
            })
          : ""}
      
      </div>

      <div>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
}
