import React from "react";
import "./Single_Ticket.css";
import { Record } from "../record";
import { Draggable } from "react-beautiful-dnd";

type Props = {
    record: Record;
    index: number;
}

const Single_Tkt = ({ record, index }: Props) => {

    const { id, title, avatar, name, description, collaborators, removed } = record;

    return (
        <Draggable draggableId={id} index={index}>
            {
                (provided, snapshot) => (
                    <div className={`singleTicket ${snapshot.isDragging ? 'dragActive' : '' }`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div>
                            <p className="ticketTitle"> {title} </p>
                        </div>
                        <div className="content">
                            <div className="user_avatar">
                                <img src={avatar} alt="user_avatar" />
                            </div>
                            <div className="user_data">
                                <div className="user_name"> {name} </div>
                                <p className="user_description"> {description} </p>
                            </div>
                        </div>
                        <div className="ticketFooter">
                            <div>
                                <a href="#" className="footer_icon">
                                    <img src="images/gal.png" alt="green_tick" />
                                </a>
                                <div className="footer_user">
                                    {collaborators.map((coll, index) => {
                                        return <img key={index} src={coll} alt="removed_user" />
                                    })}
                                </div>
                            </div>
                            <div>
                                <a href="#" className="footer_icon">
                                    <img src="images/del.png" alt="red_cross" />
                                </a>
                                <div className="footer_user">
                                    <img src={removed} alt="removed_user" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Draggable>
    )
}

export default Single_Tkt;