import React from 'react';
import { Icon } from './packages/ui/atoms/Icon/Icon';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>ASI Design System - Icon Component Demo</h1>
      
      <h2>Different icon sizes:</h2>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
        <Icon name="Settings" size="xs" />
        <Icon name="Settings" size="sm" />
        <Icon name="Settings" size="md" />
        <Icon name="Settings" size="lg" />
        <Icon name="Settings" size="xl" />
      </div>

      <h2>Icons with colors:</h2>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
        <Icon name="Settings" color="#ff0000" />
        <Icon name="Settings" color="#00ff00" />
        <Icon name="Settings" color="#0000ff" />
        <Icon name="Settings" color="#ff00ff" />
        <Icon name="Settings" color="#ffff00" />
      </div>

      <h2>Clickable icons:</h2>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
        <Icon 
          name="Settings" 
          onClick={() => alert('Settings clicked!')} 
        />
        <Icon 
          name="Home" 
          onClick={() => alert('Home clicked!')} 
        />
        <Icon 
          name="Chat" 
          onClick={() => alert('Chat clicked!')} 
        />
      </div>

      <h2>All available icons:</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(6, 1fr)', 
        gap: '16px', 
        maxWidth: '600px',
        marginBottom: '20px'
      }}>
        <Icon name="ArrowDropDown" />
        <Icon name="ArrowRight" />
        <Icon name="AttachFile" />
        <Icon name="Bitbucket" />
        <Icon name="Chat" />
        <Icon name="ChatFilled" />
        <Icon name="Cloud" />
        <Icon name="Dashboard" />
        <Icon name="DataBase" />
        <Icon name="DeployedCode" />
        <Icon name="Draft" />
        <Icon name="GithubIcon" />
        <Icon name="GoogleIcon" />
        <Icon name="Home" />
        <Icon name="Inbox" />
        <Icon name="Loader" />
        <Icon name="Memory" />
        <Icon name="Menu" />
        <Icon name="MoreHoriz" />
        <Icon name="MoreVert" />
        <Icon name="Person" />
        <Icon name="RadioButtonChecked" />
        <Icon name="Settings" />
        <Icon name="SmartToy" />
        <Icon name="TextSnippet" />
        <Icon name="ZoomIn" />
        <Icon name="ZoomOut" />
      </div>

      <h2>Icons with labels:</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '16px', 
        maxWidth: '400px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <Icon name="Settings" />
          <div>Settings</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Icon name="Home" />
          <div>Home</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Icon name="Chat" />
          <div>Chat</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Icon name="Dashboard" />
          <div>Dashboard</div>
        </div>
      </div>
    </div>
  );
}

export { App };
