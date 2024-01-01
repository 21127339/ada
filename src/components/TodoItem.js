// src/components/TodoItem.js
import { Box, Checkbox, Text, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" p={3} borderBottom="1px solid #ccc">
      <Checkbox isChecked={todo.completed} onChange={() => onToggle(todo.id)}>
        <Text ml={2} textDecoration={todo.completed ? "line-through" : "none"}>
          {todo.text}
        </Text>
      </Checkbox>
      <IconButton icon={<DeleteIcon />} onClick={() => onDelete(todo.id)} />
    </Box>
  );
};

export default TodoItem;
