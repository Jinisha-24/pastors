import React, { useEffect, useState } from "react";
import axios from "axios";

function ModalPage({ buttons }) {
  const [contactList, setContactList] = useState();
  const [usData, setUsData] = useState("");

  const getContact = async (countryId) => {
    try {
      console.log("hii");
      const axiosConfig = {
        method: "GET",
        url: "https://api.dev.pastorsline.com/api/contacts.json",
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4",
        },
        params: {
          companyId: "171",
          countryId,
        },
      };
      console.log(axiosConfig.params);
      const res = await axios(axiosConfig);
      setContactList(res.data);
      console.log(res.data);
    } catch (err) {
      console.log("hshdjkf");
      console.log(err);
    }
  };

  useEffect(() => {
    getContact();
  }, []);

  useEffect(() => {
    getContact(usData);
  }, [usData]);
  return (
    <>
      <div className="modal-class m-4">
        <button className="btn btn-a">All Contacts</button>
        <a
          className="btn btn-b"
          data-toggle="modal"
          href={buttons}
          onClick={() => {
            setUsData(226);
          }}
        >
          US Contacts
        </a>
        <button
          type="button"
          className="btn btn-c"
          data-dismiss="modal"
          aria-label="Close"
        >
          Close
        </button>
      </div>
      {contactList?.length > 0 ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>S no.</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {contactList?.contacts_ids?.map((contact, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )}
      <div class="modal-footer">
        <input type="checkbox" />
        <label>Only even</label>
      </div>
    </>
  );
}

export default ModalPage;
