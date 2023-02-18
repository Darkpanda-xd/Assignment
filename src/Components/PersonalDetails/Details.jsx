import React from "react";
import "./Details.css";
const Details = (props) => {
  console.log(props);
  return (
    <form className="detail">
      {props.details.map(
        ({
          id,
          birthday,
          gender,
          zip,
          phone,
          membership,
          address,
          city,
          register
        }) => {
          return (
            <div className="detail-item" key={id}>
              <span>
                <label>Gender</label>
                <input
                  type="text"
                  value={gender}
                  readOnly
                />
              </span>
              <span>
                <label>Birthday</label>
                <input
                  type="text"
                  value={birthday}
                  readOnly
                />
              </span>
              <span>
                <label>Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  readOnly
                />
              </span>
              <span>
                <label>Registered Date</label>
                <input
                  type="text"
                  value={register}
                  readOnly
                />
              </span>
              <span>
                <label>Street Address</label>
                <input
                  type="text"
                  value={address}
                  readOnly
                />
              </span>
              <span>
                <label>City</label>
                <input
                  type="text"
                  value={city}
                  readOnly
                />
              </span>
              <span>
                <label>Zip Code</label>
                <input
                  type="text"
                  value={zip}
                  readOnly
                />
              </span>
              <span>
                <label>Member Status</label>
                <input
                  type="text"
                  value={membership}
                  readOnly
                />
              </span>
            </div>
          );
        }
      )}
    </form>
  );
};

export default Details;
