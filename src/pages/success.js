import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import Layout from "@/components/Layout";
import Button from "@/components/Common/Button";
import { useGlobal } from "@/Context/GolobalContextProvider";

const Success = () => {
  const { userData } = useGlobal();
  const { name, phone } = userData;
  return (
    <Layout>
      <div className="min-h-[500px] flex items-center">
        <Wrapper>
          <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
            <div className="text-2xl font-bold">
              <h1>
                {" "}
                Hello ,<span className="text-[#E31C25]">{name}</span>
              </h1>
              Thanks for shopping with us!
            </div>
            <div className="text-lg font-bold mt-2">
              Your order has been placed successfully.
            </div>
            <div className="text-base mt-5">
              The information has been sent to your phone number
            </div>
            <div className="underline text-2xl mt-2">{phone}</div>

            <Button className="bg-[#E31C25] hover:bg-black duration-200 ease-out rounded-sm mt-8 w-[200px]">
              <Link href="/" className="font-bold mt-5">
                Back To Home
              </Link>
            </Button>
          </div>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default Success;
