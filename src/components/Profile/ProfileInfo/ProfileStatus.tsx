import React, {ChangeEvent, useState} from "react";


type ProfileStatusPropsType = {
    status: string
    updateUserProfileStatus: (status: string) => void
}

export function ProfileStatus ({status, updateUserProfileStatus}: ProfileStatusPropsType) {

    let [value, setValue] = useState("")

    let [editMode, setEditMode] = useState(false)

    const activeEditMode = () => {
        setEditMode(true)
        setValue(status)
    }
    const activeViewMode = () => {
        if (value !== "") {
            updateUserProfileStatus(value)
            setEditMode(false)
        }
    }
    const onChangeStatusValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>

            {
                editMode
                ?   <div>
                        <input
                            type="text"
                            autoFocus
                            value={value}
                            onChange={onChangeStatusValue}
                            onBlur={activeViewMode}
                            onKeyPress={(e) => {
                                if (e.charCode === 13) {
                                    activeViewMode()
                                }
                            }}
                        />
                    </div>
                :  <div>
                        <span onDoubleClick={activeEditMode}>{status || "No status"}</span>
                    </div>
            }

        </div>
    );
}



