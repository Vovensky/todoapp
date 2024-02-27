const Task = ({className, description, created}) => {


            if(className === 'editing') {
                return (
                    <li className={className}>
                        <div class="view">
                            <input class="toggle" type="checkbox"/>
                            <label>
                                <span class="description">{description}</span>
                                <span class="created">{created}</span>
                            </label>
                            <button class="icon icon-edit"></button>
                            <button class="icon icon-destroy"></button>
                        </div>
                        <input type="text" class="edit" value="Editing task"/>
                    </li>
                )
            } else {
                return (
                    <li className={className}>
                        <div class="view">
                        <input class="toggle" type="checkbox"/>
                        <label>
                            <span class="description">{description}</span>
                            <span class="created">{created}</span>
                        </label>
                        <button class="icon icon-edit"></button>
                        <button class="icon icon-destroy"></button>
                        </div>
                    </li>
                )
            }
        
}

export default Task;