import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';


import { firebasePlayers } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';


class AdminPlayers extends Component {

    state = {
        isloading: true,
        matches: []
    }

    componentDidMount(){
        firebasePlayers.once('value').then((snapshot) => {
            const players = firebaseLooper(snapshot);

            this.setState({
                isLoading: false,
                players: reverseArray(players)
            })
        })
    }

    render() {

        console.log(this.state)
        return (
            <div>
                AdminPlayers
            </div>
        );
    }
}

export default AdminPlayers;