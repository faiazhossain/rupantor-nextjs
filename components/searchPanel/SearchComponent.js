import { ConfigProvider, Input, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
const { Search } = Input;

import React, { useEffect, useState } from "react";
import { getRupantorData } from "../../redux/actions/mainActions";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const SearchComponent = () => {
  //hooks
  const dispatch = useAppDispatch();
  // states
  const [isLoading, setIsLoading] = useState(false);
  const rupantorData = useAppSelector(
    (state) => state?.map?.rupantorData ?? null
  );
  const handleSearch = (e) => {
    dispatch(getRupantorData(e));
    // getRupantorData(e);
    setIsLoading(true);
  };
  useEffect(() => {
    if (rupantorData !== null) {
      setIsLoading(false);
    }
  }, [rupantorData]);

  console.log(rupantorData, "faiaz");
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Title className="headline">What is Rupantor?</Title>
        <Typography style={{ fontWeight: "bold", color: "#424769" }}>
          A state of the art address normalizer for normalizing addresses
        </Typography>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#00b96b",
              borderRadius: 2,

              // Alias Token
              colorBgContainer: "#f6ffed",
            },
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ color: "black", textAlign: "start" }}>
              Try Rupantor for Free.
            </label>
            <Search
              placeholder="input search text"
              size="large"
              allowClear
              enterButton
              onSearch={handleSearch}
              loading={isLoading}
            />
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default SearchComponent;
