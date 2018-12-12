import React, {Component} from 'react'
import {connect} from 'react-redux';

import AnnotatedSection from '../components/AnnotatedSection'
import UpdateGodUser from '../components/UpdateGodUser';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faCertificate from '@fortawesome/fontawesome-free-solid/faCertificate'

class Account extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isGod: false,
            availableCertifications: ''
        };
    }

    render() {
        return (
            <div>
                <AnnotatedSection
                    annotationContent={
                        <div>
                            <FontAwesomeIcon fixedWidth style={{paddingTop: "3px", marginRight: "6px"}} icon={faUser}/>
                            Account information
                        </div>
                    }
                    panelContent={
                        <div>
                            <div>Ethereum address : 0x627306090abab3a6e1400e9345bc60c78a8bef57</div>
                            <div>Ether balance : 100 </div>
                        </div>
                    }
                />
                <AnnotatedSection
                    annotationContent={
                        <div>
                            <FontAwesomeIcon fixedWidth style={{paddingTop: "3px", marginRight: "6px"}}
                                             icon={faCertificate}/>
                            Certifications
                        </div>
                    }
                    panelContent={
                        <div>
                            <table className="table table-sm mb-0 noHeaderLine">
                                <tbody>
                                {
                                    // displays all available certifications
                                    this.state.availableCertifications && this.state.availableCertifications.length > 0 ?
                                        this.state.availableCertifications.map((certification, index) =>
                                            <tr key={index}>
                                                <td style={{width: '45px'}}>
                                                    {
                                                        certification.imageUrl && certification.imageUrl.length > 0 ?
                                                            <img src={certification.imageUrl} alt={certification.name}
                                                                 style={{maxWidth: '27px', maxHeight: '27px'}}/>
                                                            :
                                                            <div style={{
                                                                width: '27px',
                                                                height: '27px',
                                                                background: '#c4c4c4'
                                                            }}>&nbsp;</div>
                                                    }
                                                </td>
                                                <td>{certification.name}</td>
                                            </tr>
                                        )
                                        :
                                        <tr>
                                            <td>No certifications created yet.</td>
                                        </tr>
                                }
                                </tbody>
                            </table>
                        </div>
                    }
                />
                {this.state.isGod &&
                <UpdateGodUser/>
                }
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         web3: state.reducer.web3,
//         passageInstance: state.reducer.passageInstance,
//         web3Accounts: state.reducer.web3Accounts,
//         userAddress: state.reducer.userAddress
//     };
// }

export default Account;

