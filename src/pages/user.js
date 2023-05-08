import React from "react";
import Wrapper from "@/components/Wrapper";
import Layout from "@/components/Layout";
import { useGlobal } from "@/Context/GolobalContextProvider";

const User = () => {
  const { userData } = useGlobal();
  const { name,height,weight,age, phone,gender ,plan} = userData;
  return (
    <Layout>
      <div className="min-h-[500px] flex items-center">
        <Wrapper>
          <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-xl font-bold mb-2">
            <h4>
            
            Plan: <span className="text-[#E31C25]">{plan}</span>
            </h4>
            </div>
            <div className="text-lg font-bold">
              <h4>
            
              Name: <span className="text-[#E31C25]">{name}</span>
              </h4>
             
            </div>
            <div className="text-lg font-bold mt-2">
            <h4>
            
            Height: <span className="text-[#E31C25]">{height}</span>
            </h4>
            </div>
            <div className="text-lg font-bold mt-2">
            <h4>
            
            Weight: <span className="text-[#E31C25]">{weight}</span>
            </h4>
            </div>
            <div className="text-lg font-bold mt-2">
            <h4>
            
            Age: <span className="text-[#E31C25]">{age}</span>
            </h4>
            </div>
            <div className="text-lg font-bold mt-2">
            <h4>
            
            Phone: <span className="text-[#E31C25]">{phone}</span>
            </h4>
            </div>
            <div className="text-lg font-bold mt-2">
            <h4>
            
            Gender: <span className="text-[#E31C25]">{gender}</span>
            </h4>
            </div>
           
          

          
          </div>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default User;
