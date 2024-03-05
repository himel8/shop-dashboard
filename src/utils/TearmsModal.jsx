import React from "react";

import {
  TEModal,
  TEModalBody,
  TEModalContent,
  TEModalDialog,
  TEModalHeader,
} from "tw-elements-react";

const TearmsModal = ({ customerServiceModal, setCustomerServiceModal }) => {
  return (
    <TEModal
      show={customerServiceModal}
      setShow={setCustomerServiceModal}
      className="z-[9999] flex items-center justify-center "
    >
      <TEModalDialog className="w-[95vw] sm:w-[60vw] h-[70vh] overflow-y-auto mx-auto">
        <TEModalContent>
          <TEModalHeader className="border-b">
            {/* <!--Modal title--> */}
            <h5 className="text-lg font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              Terms & conditions
            </h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => setCustomerServiceModal(false)}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </TEModalHeader>
          {/* <!--Modal body--> */}
          <TEModalBody className="p-8 flex flex-col gap-2">
            <p className="text-sm">
              These General Terms and Conditions of Use ("Terms") are entered by
              and between you and AKSHAAK, a Dubai based company under ("AKSHAAK
              PORTAL LLC"). In consideration of your use of and access to this
              Internet site, AKSHAAK's mobile services, AKSHAAK 's telephone
              ordering and voice response unit services, AKSHAAK's software
              applications downloaded to your desktop, AKSHAAK email addresses,
              and other websites and services on which these Terms are posted or
              expressly referenced ("AKSHAAK Services"), and the promises and
              obligations herein, and intending to be legally bound, you and
              AKSHAAK hereby agree as follows:
            </p>
            <p className="text-sm">
              Your access to, and your use of the AKSHAAK Services is subject to
              these Terms, which incorporate the separately posted Privacy
              Statement and other policies, as well as any modifications to them
              issued by AKSHAAK and all applicable laws and regulations. If any
              of the AKSHAAK Services set forth separate or additional terms and
              conditions of use, privacy statement, or other policy ("Separate
              Terms"), then those Separate Terms as modified from time to time
              shall apply in connection with your use of that AKSHAAK Service.
              In the event of a direct conflict between such Separate Terms and
              these Terms, the Separate Terms shall govern.
            </p>
            <p className="text-sm">
              AKSHAAK Services provide information concerning various products
              and services and the opportunity to obtain additional information
              concerning those products and services or to purchase them. These
              Terms, and the information provided by the AKSHAAK Services in no
              way override the terms and conditions of your purchase of any
              product or service except as specifically provided herein. In the
              event that any area within or feature offered by the AKSHAAK
              Services contains specific terms and conditions concerning its use
              ("Specific Terms"), those Specific Terms are in addition to these
              Terms. In the event of a direct conflict between these Terms and
              the Specific Terms, the Specific Terms shall govern.AKSHAAK PORTAL
              L.L.C maintains the https://akshaak.com/ Website ("Site").
            </p>
            <p className="text-base font-semibold text-center">INTRODUCTION</p>
            <p className="text-sm">
              AKSHAAK is an online marketplace to buy and sell handmade and
              unique items.
            </p>
            <p className="text-sm">
              AKSHAAK is completely about celebrating the fact that the world is
              full of creative flair. There are literally millions of artisans
              around the world brimming with artistic talent. When that
              creativity is expressed through art the world is a richer place
              because of it. This is what we firmly believe at AKSHAAK.
            </p>
            <p className="text-sm">
              It is important that you read and understand the agreement below.
              Using this website means you accept this agreement and any changes
              made after the commencement of use
            </p>
            <p className="text-lg font-semibold">1. CHANGES IN TERMS</p>
            <p className="text-sm">
              AKSHAAK shall have right at any time and without prior notice, at
              its sole discretion, to revise these Terms or to impose new terms
              and conditions with respect to access to or use of the AKSHAAK
              Services. Such revisions and additions shall be effective
              immediately upon notice thereof, which may be given by any means,
              including without limitation posting the revised or additional
              terms and conditions on the AKSHAAK Services.
            </p>
            <p className="text-sm">
              You are responsible for reviewing these Terms periodically for any
              modification to these Terms that may affect your rights or
              obligations hereunder. You agree that you shall be deemed to be
              apprised of and bound by any modification by AKSHAAK to these
              Terms. ANY ACCESS OR USE OF THE AKSHAAK SERVICES BY YOU AFTER
              NOTICE OF REVISIONS OR ADDITIONS TO THESE TERMS SHALL CONSTITUTE
              AND BE DEEMED TO BE YOUR AGREEMENT TO SUCH REVISIONS OR ADDITIONS.
              No modification to these Terms by any party other than AKSHAAK
              shall be valid or enforceable against AKSHAAK unless expressly
              agreed to by AKSHAAK in a writing signed by a duly authorized
              officer of AKSHAAK.
            </p>
          </TEModalBody>
        </TEModalContent>
      </TEModalDialog>
    </TEModal>
  );
};

export default TearmsModal;
