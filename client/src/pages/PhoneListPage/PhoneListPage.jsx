import { useEffect, useState } from "react";
import service from "../../services/config";
import Loading from "../../components/Loading/Loading";
import PhoneDetailsPage from "../../components/PhoneDetailsPage";

function PhoneListPage() {
  const [phoneList, setPhoneList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [phoneDetails, setPhoneDetails] = useState([]);
  const [isClicked, setIsClicked] = useState(null);

  const getPhonesData = async () => {
    try {
      const response = await service.get("/phones");
      setPhoneList(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    if (isClicked && isClicked == e.target.value) {
      setIsClicked(null);
    } else {
      setIsClicked(e.target.value);
      getPhoneDetails(e.target.value);
    }
  };

  const getPhoneDetails = async (data) => {
    try {
      const phoneId = data;
      const response = await service.get(`/phones/${phoneId}`);
      setPhoneDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhonesData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1>PhoneListPage</h1>
      {phoneList.map((eachPhone) => {
        return (
          <div key={eachPhone.id}>
            <h2>{eachPhone.name}</h2>
            <p>
              <button onClick={handleClick} value={eachPhone.id}>
                Details
              </button>
            </p>

            {isClicked !== null && isClicked == eachPhone.id && (
              <PhoneDetailsPage phoneDetails={phoneDetails} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default PhoneListPage;
