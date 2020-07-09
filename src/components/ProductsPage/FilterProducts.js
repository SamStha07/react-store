import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/context";

export default function FilterProducts() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          search,
          company,
          min,
          max,
          price,
          shipping,
          handleChange,
          storeProducts,
        } = value;

        //to show the companies in the form
        let companies = new Set();
        companies.add("all");
        for (let product in storeProducts) {
          companies.add(storeProducts[product].company);
        }
        companies = [...companies];

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* text search */}
                <div>
                  <label htmlFor={search}>search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                  {/* end of search */}
                  {/* category search */}
                  <div>
                    <label htmlFor={company}>company</label>
                    <select
                      name="company"
                      id="company"
                      onChange={handleChange}
                      value={company}
                      className="filter-item"
                    >
                      {companies.map((company, index) => (
                        <option key={index} value={company}>
                          {company}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* end of category */}
                  {/* price range */}
                  <div>
                    <label htmlFor={price}>
                      <p className="mb-2">
                        product price: <span>Rs.{price}</span>
                      </p>
                    </label>
                    <input
                      type="range"
                      name="price"
                      value={price}
                      id="price"
                      min={min}
                      max={max}
                      className="filter-price"
                      onChange={handleChange}
                    ></input>
                  </div>
                  {/* end of price */}
                  {/* free shipping */}
                  <div>
                    <label htmlFor={shipping} className="mx-2">
                      free shipping
                    </label>
                    <input
                      type="checkbox"
                      name="shipping"
                      id="shipping"
                      onChange={handleChange}
                      checked={shipping && true}
                    ></input>
                  </div>
                </div>
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;
