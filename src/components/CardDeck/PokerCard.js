import React from 'react';
import Color from 'color';
import {Button, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const CustomCard = ({ classes, image, title, subtitle }) => {
    return (
      <CardActionArea className={classes.root}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={image} />
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant={'h2'}>
              {title}
            </Typography>
            <Typography className={classes.subtitle}>{subtitle}</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    );
  };

// const useStyles = makeStyles(({breakpoints, spacing, ...theme}) => {
//     return {

//         root: {
//             borderRadius: spacing(1),
//             display: "flex",
//             width: 60,
//             height: 90,
//             margin: 10,
//             padding: 0,
//             [breakpoints.between('xs', 'sm')]: {
//                 width: 60,
//                 height: 90,
//             },
//             [breakpoints.between('sm', 'lg')]: {
//                 width: 60,
//                 height: 90,
//             },
//             [breakpoints.between('lg', 'xl')]: {
//                 // alignItems: "center",
//                 // alignContent: "center",
//                 // justifyContent: "center",
//                 width: 90,
//                 height: 140,
//                 // marginTop: 20
//             },
//         },
//         score: {
//             borderRadius: spacing(1),
//             height: "100%",
//             minWidth: "100%",
//         },
//     }
// });

const useStyles = makeStyles(({breakpoints, spacing, ...theme}) => ({
    root: {
        display: 'flex',
        width: 60,
        height: 90,
        padding: 0,
        borderRadius: spacing(1),
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
        [breakpoints.between('xs', 'sm')]: {
            width: 60,
            height: 90,
        },
        [breakpoints.between('sm', 'lg')]: {
            width: 60,
            height: 90,
        },
        [breakpoints.between('lg', 'xl')]: {
            width: 90,
            height: 140,
            margin: 10
        },
    },
    card: ({ color }) => ({
        width: "100%",
        height: "100%",
        borderRadius: spacing(1),
        boxShadow: 'none',
        // display: 'flex',
        '&:hover': {
            boxShadow: `0 6px 12px 0 ${Color(color)
            .rotate(-12)
            .darken(0.2)
            .fade(0.5)}`,
        },
    }),
    media: {
        width: "100%",
        height: 0,
        paddingBottom: '95%'
    },
    content: ({ color }) => {
        return {
            backgroundColor: color,
            display: 'flex',
            padding: 0,
            // height: 50,
            justifyContent: 'center',
        };
    },

    title: {
        fontFamily: 'Keania One',
        fontSize: '2rem',
        color: '#fff',
        textTransform: 'uppercase',
    },
  }));

export const PokerCard = ({score, isSelected, select}) => {
    const styles = useStyles({ color: '#203f52' });

    return  <CustomCard
         classes={styles}
        title={score} 
        image={'https://progameguides.com/wp-content/uploads/2019/10/fortnite-outfit-scratch.jpg'} 
    />;
}
