import React from 'react';
import List from '@material-ui/core/List';
import {UserItemList} from "./UserItemList";

const avatar = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Blue&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Pink&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Tongue&skinColor=Yellow";

export const UserList = ({users}) => {
    return <List>
        {users.map((user, index) => <UserItemList
                key={user._id}
                username={user.name}
                avatar={avatar}
                score={user.score || '-'}
                hasDivider={index + 1 !== users.length}
            />
        )}
    </List>
}
