import React from 'react';
import Color from 'color';
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import cardCover from '../../assets/images/cards/innim/2.svg';
import cx from 'clsx';


export const PokerCard = ({score, isSelected, select}) => {
    const styles = useStyles({
        color: {
            default: '#333',
            selected: '#ffff'
        },
        background: {
            default: '#fff',
            selected:  '#203f52'
        }
     });

    const rootStyles = isSelected ? cx(styles.root, styles.selected) : styles.root;

    return <CardActionArea className={rootStyles} onClick={() => select(score)}>
            <Card className={styles.card}>
            <CardMedia className={styles.media} image={cardCover} />
            <CardContent className={styles.content}>
                <Typography className={styles.title} variant={'h2'}>
                {score}
                </Typography>
            </CardContent>
            </Card>
      </CardActionArea>
}

const useStyles = makeStyles(({breakpoints, spacing}) => ({
    root: ({color, background}) => ({
        display: 'flex',
        width: 60,
        height: 90,
        padding: 0,
        borderRadius: spacing(1),
        background: background.default,
        border: `solid 1px #203f52`,
        overflow: 'hidden',
        transition: '0.2s',
        color: `${color.default}`,
        margin: 10,
        boxShadow: `0 6px 12px 0 ${Color(color.default)
            .rotate(-12)
            .darken(0.2)
            .fade(0.5)}`,
        '&:hover': {
            transform: 'scale(1.1)',
        },
        [breakpoints.between('xs', 'sm')]: {
            width: 70,
            height: 100,
        },
        [breakpoints.between('sm', 'lg')]: {
            width: 70,
            height: 100,
        },
        [breakpoints.between('lg', 'xl')]: {
            width: 90,
            height: 140,
            margin: 10
        },
    }),
    selected: ({color}) => ({
        transform: 'scale(1.1)',
        background: "linear-gradient(to top, #5175B4, #FF8383)",
        color: `${color.selected}`,
        boxShadow: `0 6px 12px 0 ${Color('#5175B4')
            .rotate(-12)
            .darken(0.2)
            .fade(0.5)}`,
    }),
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: "100%",
        height: "100%",
        background: 'inherit',
        color: 'inherit',
    },
    media: {
        width: "100%",
        height: "100%",
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        '&:last-child': {
            padding: 0
        },
    },
    title: {
        fontSize: 22,
        color: 'inherit',
        textTransform: 'uppercase',
        [breakpoints.between('xs', 'sm')]: {
            fontSize: 20,
        },
    },
}));
