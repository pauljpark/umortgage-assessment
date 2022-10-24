import path from "../assets/Road-01.png"
import check from "../assets/Journey-Icon-01.png"
import checkColored from "../assets/Journey-Icon-12.png"
import property from "../assets/Journey-Icon-02.png"
import propertyColored from "../assets/Journey-Icon-13.png"
import quote from "../assets/Journey-Icon-03.png"
import quoteColored from "../assets/Journey-Icon-14.png"
import application from "../assets/Journey-Icon-04.png"
import applicationColored from "../assets/Journey-Icon-15.png"
import pen from "../assets/Journey-Icon-05.png"
import penColored from "../assets/Journey-Icon-16.png"
import tag from "../assets/Journey-Icon-06.png"
import tagColored from "../assets/Journey-Icon-17.png"
import arrow from "../assets/Journey-Icon-07.png"
import arrowColored from "../assets/Journey-Icon-18.png"
import clock from "../assets/Journey-Icon-08.png"
import clockColored from "../assets/Journey-Icon-19.png"
import signed from "../assets/Journey-Icon-09.png"
import signedColored from "../assets/Journey-Icon-20.png"
import shield from "../assets/Journey-Icon-10.png"
import shieldColored from "../assets/Journey-Icon-21.png"
import house from "../assets/Journey-Icon-11.png"
import houseColored from "../assets/Journey-Icon-22.png"
import TextBubble from "./TextBubble"
import { useState } from "react"

function Journey() {
    const [StepNumber, setStepNumber] = useState(0)

    const startBtnClick = () => {
        setStepNumber(1)
    }

    const handleChangeOne = () => {
        setStepNumber(1)
    }

    const handleChangeTwo = () => {
        setStepNumber(2)
    }

    const handleChangeTwoB = () => {
        setStepNumber(2.5)
    }

    const handleChangeThree = () => {
        setStepNumber(3)
    }

    const handleChangeFour = () => {
        setStepNumber(4)
    }

    const handleChangeFive = () => {
        setStepNumber(5)
    }

    const handleChangeSix = () => {
        setStepNumber(6)
    }

    const handleChangeSeven = () => {
        setStepNumber(7)
    }

    const handleChangeEight = () => {
        setStepNumber(8)
    }

    const handleChangeNine = () => {
        setStepNumber(9)
    }

    const handleChangeTen = () => {
        setStepNumber(10)
    }

    return (
        <div className="journey">
            <h1>Click The Icons to<br />See Your Loan Journey</h1>
            <button className="journey-btn" onClick={() => startBtnClick()} style={{display: StepNumber !== 0 ? "none" : "block"}}>CLICK TO START<br />YOUR LOAN JOURNEY</button>
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
            <img className="path" src={path} alt='path' />
            <div className="steps">
                <div className="step-1">
                    <img className="icon-1" src={StepNumber === 1 ? checkColored : check} alt='checkmark' onClick={() => handleChangeOne()} />
                    <h4 style={{color: StepNumber === 1 ? "#754AEA" : null}}>STEP ONE:<br />Pre-Approval</h4>
                </div>
                <div style={{display: StepNumber === 1 ? "block" : "none"}} className="step-1-bubble">
                    <TextBubble 
                        need='Information about you (purchase history, preferred rate, credit score estimate, household income, 
                                employment status, timeline for purchase, hisotry of foreclosure, proof of income, Real Estate Agent,
                                contact information) and information about your prospective home (zip code, intended usage, purchase
                                price, estimated down payment, preferred rate)' 
                        get='An estimated loan amount & buyer information verification.'
                    />
                </div>
                <div className="step-2">
                    <img className="icon-2" src={StepNumber === 2 ? propertyColored : property} alt='checkmark' onClick={() => handleChangeTwo()} />
                    <h4 style={{color: StepNumber === 2 ? "#754AEA" : null}}>STEP TWO:<br />Find a Property</h4>
                </div>
                <div style={{display: StepNumber === 2 ? "block" : "none"}} className="step-2-bubble">
                    <TextBubble need='For you to find your dream property!' get='To start the exciting process of home ownership.' />
                </div>
                <div className="step-2b">
                    <img className="icon-2b" src={StepNumber === 2.5 ? quoteColored : quote} alt='checkmark' onClick={() => handleChangeTwoB()} />
                    <h4 style={{color: StepNumber === 2.5 ? "#754AEA" : null}}>STEP TWO B:<br />Get a Quote</h4>
                </div>
                <div style={{display: StepNumber === 2.5 ? "block" : "none"}} className="step-2b-bubble">
                    <TextBubble need='Information about you (purchase history, preferred rate, credit score estimate, household income, 
                                        employment status, timeline for purchase, hisotry of foreclosure, proof of income, Real Estate Agent,
                                        contact information) and information about your prospective home (zip code, intended usage, purchase
                                        price, estimated down payment, preferred rate)' 
                                get='An estimated loan amount, estimated interest rate, loan options, closing cost & fees breakdown..' 
                    />
                </div>
                <div className="step-3">
                    <img className="icon-3" src={StepNumber === 3 ? applicationColored : application} alt='checkmark' onClick={() => handleChangeThree()} />
                    <h4 style={{color: StepNumber === 3 ? "#754AEA" : null}}>STEP THREE:<br />Complete<br />Application</h4>
                </div>
                <div style={{display: StepNumber === 3 ? "block" : "none"}} className="step-3-bubble">
                    <TextBubble need='A completed 1003 application (credit check, SSN, employer information, income verifiation)' 
                                get='A confirmation email that your application is complete and even closer to home ownership.' 
                    />
                </div>
                <div className="step-4">
                    <img className="icon-4" src={StepNumber === 4 ? penColored : pen} alt='checkmark' onClick={() => handleChangeFour()} />
                    <h4 style={{color: StepNumber === 4 ? "#754AEA" : null}}>STEP FOUR:<br />Initial Disclosure<br />Signed</h4>
                </div>
                <div style={{display: StepNumber === 4 ? "block" : "none"}} className="step-4-bubble">
                    <TextBubble need='Buyer signature, SSN, and & credit card information' 
                                get='One step closer!' 
                    />
                </div>
                <div className="step-5">
                    <img className="icon-5" src={StepNumber === 5 ? tagColored : tag} alt='checkmark' onClick={() => handleChangeFive()} />
                    <h4 style={{color: StepNumber === 5 ? "#754AEA" : null}}>STEP FIVE:<br />Appraisal<br />Ordered</h4>
                </div>
                <div style={{display: StepNumber === 5 ? "block" : "none"}} className="step-5-bubble">
                    <TextBubble need='As long as all our information is accurate, nothing!' 
                                get='The guarantee that your future home will be appraised.' 
                    />
                </div>
                <div className="step-6">
                    <img className="icon-6" src={StepNumber === 6 ? arrowColored : arrow} alt='checkmark' onClick={() => handleChangeSix()} />
                    <h4 style={{color: StepNumber === 6 ? "#754AEA" : null}}>STEP SIX:<br />Loan Submitted<br />To Underwriting</h4>
                </div>
                <div style={{display: StepNumber === 6 ? "block" : "none"}} className="step-6-bubble">
                    <TextBubble need='Any missing or incomplete documentation & information.' 
                                get='A loan being processed by Underwriting.' 
                    />
                </div>
                <div className="step-7">
                    <img className="icon-7" src={StepNumber === 7 ? clockColored : clock} alt='checkmark' onClick={() => handleChangeSeven()} />
                    <h4 style={{color: StepNumber === 7 ? "#754AEA" : null}}>STEP SEVEN:<br />Appraisal<br />Scheduled</h4>
                </div>
                <div style={{display: StepNumber === 7 ? "block" : "none"}} className="step-7-bubble">
                    <TextBubble need='Your preferred appraisal date.' 
                                get='A scheduled property appraisal.' 
                    />
                </div>
                <div className="step-8">
                    <img className="icon-8" src={StepNumber === 8 ? signedColored : signed} alt='checkmark' onClick={() => handleChangeEight()} />
                    <h4 style={{color: StepNumber === 8 ? "#754AEA" : null}}>STEP EIGHT:<br />Early Closing<br />Disclosure Signed</h4>
                </div>
                <div style={{display: StepNumber === 8 ? "block" : "none"}} className="step-8-bubble">
                    <TextBubble need="Buyer's home signature, SSN, & property information."  
                                get='Another step closer to your loan!' 
                    />
                </div>
                <div className="step-9">
                    <img className="icon-9" src={StepNumber === 9 ? shieldColored : shield} alt='checkmark' onClick={() => handleChangeNine()} />
                    <h4 style={{color: StepNumber === 9 ? "#754AEA" : null}}>STEP NINE:<br />Loan & Appraisal<br />Approval</h4>
                </div>
                <div style={{display: StepNumber === 9 ? "block" : "none"}} className="step-9-bubble">
                    <TextBubble need='Any missing or incomplete information & documentation (in the case that you are Approved with Conditions)' 
                                get='Loan approval and a complete appraisal.' 
                    />
                </div>
                <div className="step-10">
                    <img className="icon-10" src={StepNumber === 10 ? houseColored : house} style={{width: StepNumber === 10 ? "150px" : null }} alt='checkmark' onClick={() => handleChangeTen()} />
                    <h4 style={{color: StepNumber === 10 ? "#754AEA" : null, fontSize: StepNumber === 10 ? '36px' : null}}>STEP TEN:<br />Closing</h4>
                </div>
                <div style={{display: StepNumber === 10 ? "block" : "none"}} className="step-10-bubble">
                    <TextBubble need='Nothing, our job is done!' 
                                get='A fresh start in your new home.' 
                    />
                </div>
            </div>
        </div>
    )
}

export default Journey
