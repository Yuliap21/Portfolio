// src/components/connect

import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { SocialIcon } from 'react-social-icons';
import { media } from "../data";

export default function Connect() {
  return (
    <section id="connect">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          CONNECT
        </h1>
        <div className="flex flex-wrap m-4">
          {Connect.map}
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <TerminalIcon className="block w-8 text-gray-500 mb-4" />

              {/* <li style={{color: "red"}}><a href="https://www.facebook.com/yulia.penyevskaya.3" target="_blank" rel="noopener noreferrer"><SocialIcon network="facebook" style={{ height: 25, width: 25 }} /></a></li>
                   <li><a href="https://www.facebook.com/yulia.penyevskaya.3" target="_blank" rel="noopener noreferrer"><SocialIcon network="instagram" style={{ height: 25, width: 25 }} /></a></li>
                   <li><a href="https://www.facebook.com/yulia.penyevskaya.3" target="_blank" rel="noopener noreferrer"><SocialIcon network="linkedin" style={{ height: 25, width: 25 }} /></a></li>
                   <li><a href="https://www.facebook.com/yulia.penyevskaya.3" target="_blank" rel="noopener noreferrer"><SocialIcon network="github" style={{ height: 25, width: 25 }} /></a></li> */}
                <div>{media.map(everyOption =>
                  <a href={everyOption.link} key={everyOption.name} target="_blank" rel="noopener noreferrer">
                      <div className="bg-gray-700 rounded flex p-4 m-2 h-full items-center">
                        <SocialIcon network={everyOption.icon} style={{ height: 25, width: 25 }}/>
                        <span className="title-font font-medium text-white p-2">
                          {everyOption.name}
                        </span>
                      </div>
                    </a>
                )}
              </div>
            <div className="inline-flex items-center">

                <span className="flex-grow flex flex-col pl-4">
                  {/* <span className="title-font font-medium text-white">
                    {connect.name}
                  </span> */}
                  <span className="text-gray-500 text-sm uppercase">
                    {/* {connect.company} */}
                  </span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
