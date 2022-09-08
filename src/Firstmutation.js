import React, { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_DETAILS = gql`
  query Query($orderBy: UserOrderByInput!, $first: Int) {
    users(orderBy: $orderBy, first: $first) {
      edges {
        node {
          fullName
          id
          username
        }
      }
    }
  }
`;
const LIKE_DATAILS = gql`
  mutation Mutation($likeItemId: ID!) {
    likeItem(id: $likeItemId) {
      status
    }
  }
`;

const DISLIKE = gql`
  mutation DislikeItem($dislikeItemId: ID!) {
    dislikeItem(id: $dislikeItemId) {
      status
    }
  }
`;

const Firstmutation = () => {
  const [likes, setlikes] = useState("Liked");
  const [xmemories] = useMutation(LIKE_DATAILS);
  const [dislike] = useMutation(DISLIKE);

  const onclickhandle = () => {
    // setlikes("disLiked");
    
    likes === "Liked"
      ? setlikes("dislike") || dislike({
          variables: {
            dislikeItemId: "6318431cd26fed9318161675",
          },
        },)

      :setlikes("Liked") || xmemories({
          variables: {
            likeItemId: "6318431cd26fed9318161675",
          },
        });
    // xmemories({
    //   variables: {
    //     likeItemId: "6318431cd26fed9318161675",
    //   },
    // });
    // variables:
    //   likes === "Liked"
    //     ? { dislikeItemId: "6318431cd26fed9318161675" }
    //     : { likeItemId: "6318431cd26fed9318161675" },
    //  if (likes==="true") {
    //   setlikes("false")

    //  } else {
    //   setlikes("true");
    //  }
  };

  // dislike({
  //   variables:{
  //     "dislikeItemId": "6318431cd26fed9318161675"
  //   }
  // })
  const { data, loader, error } = useQuery(GET_DETAILS, {
    variables: {
      orderBy: "name_ASC",
      first: 5,
    },
  });
  if (loader) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  console.log("data ", data);
  return (
    <div>
      {data &&
        data?.users?.edges?.map((i, index) => (
          <div>
            <ul key={index}>
              <li>{i.node.username}</li>
            </ul>
          </div>
        ))}
      <div>
        <h1>{likes}</h1>
        <button onClick={onclickhandle}>Change</button>
      </div>
    </div>
  );
};

export default Firstmutation;
