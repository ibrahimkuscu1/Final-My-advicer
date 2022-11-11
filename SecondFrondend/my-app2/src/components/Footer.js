
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='primary' className='text-white text-center text-lg-left'>
      <MDBContainer style={{marginTop: "auto"}} className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Contact Us</h5>

            <p>
              Merkez street Number: 2 Eskişehir Turkey
            </p>
            <p> Phone Number: +9002223234444</p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  About Us
                </a>
              </li>
            </ul>
          </MDBCol>

        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' >
          MyAdviser.com
        </a>
      </div>
    </MDBFooter>
  );
}