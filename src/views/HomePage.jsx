import { useQuery } from "@apollo/client";
import React from "react";
import Card from "../component/Card";
import Loader from "../component/loader/Loader";
import { GET_CARDS } from "../graphql/queries/Queries";
import "./homepage.css";

const HomePage = () => {
  const { data, loading, error } = useQuery(GET_CARDS, {
    variables: {
      orderBy: "title_DESC",
      first: 8,
    },
  });
  if (loading) return <Loader />;
  if (error) return <div>error</div>;
  return (
    <>
      <div className="card-container">
        {data?.sellItems?.edges?.map((item, index) => {
          return (
            <Card
              key={index}
              photo={item.node.item.previewImage}
              title={item.node.item.title}
              cardId={item.node.item.id}
              liked={item.node.item.likedByUserIds.includes(
                "6312494ff1dd0addd2b173ad"
              )}
              count={item.node.item.likeCount}
            />
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
