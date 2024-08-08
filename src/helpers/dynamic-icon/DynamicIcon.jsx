import React, { useState, useEffect } from 'react';

const DynamicIcon = ({ iconName }) => {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    // Dynamically import the icon component
    import(`react-icons/fa`)
      .then((module) => {
        const Icon = module[`Fa${iconName}`];
        setIconComponent(() => Icon);
      })
      .catch((err) => console.error(`Icon ${iconName} not found`, err));
  }, [iconName]);

  if (!IconComponent) return null; // Or a placeholder/spinner

  return <IconComponent />;
};

export default DynamicIcon;
