import React from 'react';
import { Link } from 'react-router-dom';

import {
  communityLinks,
  platformLinks,
  resourcesLinks,
} from '../constants/data';
import FooterContents from './FooterContents';

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      {/* mt = margin top*/}
      <div className="container grid lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10">
        {' '}
        {/* gap- 화면을 줄였을 때 grid가 아래로 떨어짐*/}
        <FooterContents title="Recources" linkData={resourcesLinks} />
        <FooterContents title="Platform" linkData={platformLinks} />
        <FooterContents title="Community" linkData={communityLinks} />
        {/* <div>
          <h3 className="text-xl font-semibold md-4">Resources</h3>
          <ul>
            {resourcesLinks.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div> */}
        {/* <div>
          <h3 className="text-xl font-semibold md-4">Platform</h3>
          <ul>
            {platformLinks.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold md-4">community</h3>
          <ul>
            {communityLinks.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
