export const studentReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_STUDENT": {
            return {
                ...state,
                searchValue: action.payload
            }
        }
        case "CHANGE_STUDENT_NAME": {
            return {
                ...state,
                studentName: action.payload
            }
        }
        case "ADD_STUDENT": {
            const newStudent = {
                id: Date.now() + "",
                name: state.studentName,
                isPresent: undefined
            }
            return {
                ...state,
                students: [...state.students, newStudent],
                studentName: ""
            }
        }
        case "EDIT_STUDENT": {
            return {
                ...state,
                editMode: true,
                editableStudent: action.payload,
                studentName: action.payload.name
            }
        }

        case "UPDATE_STUDENT": {
            return {
                ...state,
                students: state.students.map(student => {
                    if (student.id === state.editableStudent.id) {
                        return {
                            ...student,
                            name: state.studentName
                        }

                    }
                    return student
                }),
                studentName: "",
                editMode: false,
                editableStudent: null,

            }
        }
        case "CHANGE_PRESENT_STATUS": {
            if (action.payload.student.isPresent !== undefined && action.payload.isAllListBtnClicked) {
                alert(`${action.payload.student.name} is already in ${action.payload.student.isPresent ? "Present" : "Absent"} List`)
                return state
            }
            return {
                ...state,
                students: state.students.map(item => {
                    if (item.id === action.payload.student.id) {
                        return {
                            ...item,
                            isPresent: action.payload.isPresent
                        }

                    }
                    return item
                }),


            }
        }
        case "DELETE_STUDENT": {
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.payload)
            }
        }

        default: {
            return state
        }

    }
}