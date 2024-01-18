import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    const initMap = () => {
      // Styles a map in night mode.
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.1380659, lng: -106.6572985 },
        zoom: 12,
        mapTypeControl: false,
        disableDefaultUI: true,
        styles: [
          { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#263c3f' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6b9a76' }],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#38414e' }],
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#212a37' }],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9ca5b3' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#746855' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#1f2835' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#f3d19c' }],
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#2f3948' }],
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#17263c' }],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#515c6d' }],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#17263c' }],
          },
        ],
      });
    };

    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="row">
      <div className="col-xs-12">
        <div id="left">
          <h1>Contact Me</h1>
          <div className="formbox">
            <form>
              <input name="name" type="text" className="short" placeholder="Name" />
              <input name="email" type="text" className="short" placeholder="Email" />
              <input name="subject" type="text" className="feedback-input" placeholder="Subject" />
              <textarea name="text" className="feedback-input" placeholder="Message"></textarea>
              <input type="submit" value="SEND" />
            </form>
            <h6> Made by Sukhpreet Singh @Man2OUtd</h6>
          </div>
        </div>
      </div>
      <div id="right">
        <div id="map"></div>
        <div id="map-overlap">
          Sukhpreet Singh, <br />
          College Drive, <br />
          Saskatoon, SK S7N 0W5
          Canada
          <br />
          <br />
          <span>
            <br /> <span id="at">@</span>
            : Sukhpreet@nomail.com
          </span>
        </div>
      </div>
      <div id="cleared"></div>
    </div>
  );
};

export default ContactForm;
