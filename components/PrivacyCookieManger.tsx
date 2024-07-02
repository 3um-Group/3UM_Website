import Script from "next/script";

const PrivacyControls = () => {
  return (
    <>
      <Script
        id="iubenda-config"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          var _iub = _iub || [];
          _iub.csConfiguration = {
            "askConsentAtCookiePolicyUpdate": true,
            "enableFadp": true,
            "enableLgpd": true,
            "enableUspr": true,
            "fadpApplies": true,
            "floatingPreferencesButtonDisplay": "bottom-left",
            "lang": "en",
            "perPurposeConsent": true,
            "siteId": 3689309,
            "usprApplies": true,
            "usPreferencesWidgetDisplay": "inline-center",
            "whitelabel": false,
            "cookiePolicyId": 38920869,
            "banner": {
              "acceptButtonDisplay": true,
              "closeButtonDisplay": false,
              "customizeButtonDisplay": true,
              "explicitWithdrawal": true,
              "listPurposes": true,
              "ownerName": "3umgroup.com/",
              "position": "bottom",
              "rejectButtonDisplay": true,
              "showTitle": false,
              "showTotalNumberOfProviders": true
            }
          };
        `,
        }}
      />
      <Script
        type="text/javascript"
        src="https://cs.iubenda.com/autoblocking/3689309.js"
      />
      <Script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js" />
      <Script
        type="text/javascript"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        charSet="UTF-8"
        async
      />
      <Script
        id="hs-script-loader"
        type="text/javascript"
        async
        defer
        src="//js-na1.hs-scripts.com/46648362.js"
      />
    </>
  );
};

export default PrivacyControls;
