import React from "react";
import styled from "styled-components";
import {  FontWeight, Text } from "styled-typography";
function StatusSection() {
  const StatusList = styled.ul`
    background-color: white;
    border-radius: 5px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `;

  const StatusListItem = styled.li`
    border-right: 1px solid #d1d1d1;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 25px;
    width: 200px;

    &:last-child {
      border-right: none;
    }
  `;

  const StatsWrapper = styled.section`
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    margin-top: 20px;
  `;
  return (
    <StatsWrapper>
      <StatusList>
        <StatusListItem>
          <Text level={1} fontWeight={FontWeight.Light} lineHeight={1.3}>
            Supplier
          </Text>
          <Text level={2} fontWeight={FontWeight.Bold} lineHeight={1.3}>
            Hyderabad Super Market
          </Text>
        </StatusListItem>
        <StatusListItem>
          <Text level={1} fontWeight={FontWeight.Light} lineHeight={1.3}>
            Shipping Date
          </Text>
          <Text level={2} fontWeight={FontWeight.Bold} lineHeight={1.3}>
            Wed, Nov 15{" "}
          </Text>
        </StatusListItem>
        <StatusListItem>
          <Text level={1} fontWeight={FontWeight.Light} lineHeight={1.3}>
            Total
          </Text>
          <Text level={2} fontWeight={FontWeight.Bold} lineHeight={1.3}>
            $ 20000
          </Text>
        </StatusListItem>
        <StatusListItem>
          <Text level={1} fontWeight={FontWeight.Light} lineHeight={1.3}>
            Category
          </Text>
          <Text level={2} fontWeight={FontWeight.Bold} lineHeight={1.3}>
            Food
          </Text>
        </StatusListItem>
        <StatusListItem>
          <Text level={1} fontWeight={FontWeight.Light} lineHeight={1.3}>
            Department
          </Text>
          <Text level={2} fontWeight={FontWeight.Bold} lineHeight={1.3}>
            200
          </Text>
        </StatusListItem>
        <StatusListItem>
          <Text level={1} fontWeight={FontWeight.Light} lineHeight={1.3}>
            Status
          </Text>
          <Text level={2} fontWeight={FontWeight.Bold} lineHeight={1.3}>
            Waiting
          </Text>
        </StatusListItem>
        
      </StatusList>
    </StatsWrapper>
  );
}

export default StatusSection;
