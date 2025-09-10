import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '@atoms/Button';
import { InputField } from '@atoms/InputField';
import { CheckBox } from '@atoms/CheckBox';
import { Icon } from '@atoms/Icon';
import '@/storybookStyles.css';

const meta: Meta<typeof Modal> = {
  title: 'molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Modal component for displaying content in an overlay',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Indicates whether the modal is open',
    },
    onClose: {
      action: 'closed',
      description: 'The onClose event handler',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'Defines the modal size',
    },
    title: {
      control: 'text',
      description: 'The title of the modal',
    },
    description: {
      control: 'text',
      description: 'The description text below the title',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Whether to close modal when clicking overlay',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether to close modal when pressing Escape',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Modal Title',
    description: 'This is a description of what the modal is about.',
    children: <p>Modal content goes here.</p>,
    actions: [
      { label: 'Cancel', onClick: () => {}, variant: 'secondary' },
      { label: 'Confirm', onClick: () => {}, variant: 'primary' },
    ],
  },
};

export const AccountDeactivation: Story = {
  args: {
    isOpen: true,
    title: 'Account Deactivated',
    description: 'If you have a moment, please let us know why you are leaving ASI Create',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <strong>greggle-vm</strong>
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          padding: '12px', 
          backgroundColor: '#E3F2FD', 
          borderRadius: '8px',
          fontSize: '14px',
          color: '#1976D2'
        }}>
          <Icon name="Info" />
          <span>You will still be charged for this virtual machine unless you delete it.</span>
        </div>
        
        <InputField
          id="feedback"
          label=""
          placeholder="Too many LLMs and AI Agents..."
          multiline
          rows={4}
        />
        
        <CheckBox
          id="understand-charges"
          label="I understand that I will be charged for this virtual machine while it is stopped."
          checked={true}
        />
      </div>
    ),
    actions: [
      { label: 'Cancel', onClick: () => {}, variant: 'secondary' },
      { label: 'Send', onClick: () => {}, variant: 'primary' },
    ],
  },
};

export const PaymentMethod: Story = {
  args: {
    isOpen: true,
    title: 'Account Deactivated',
    description: 'If you have a moment, please let us know why you are leaving ASI Create',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p>Paymentmetod not prepeared yet</p>
        <div>
          <strong>greggle-vm</strong>
        </div>
        
        <InputField
          id="feedback"
          label=""
          placeholder="Too many LLMs and AI Agents..."
          multiline
          rows={4}
        />
        
        <div style={{ 
          border: '1px solid #E5E7EB', 
          borderRadius: '8px', 
          padding: '16px',
          backgroundColor: '#F9FAFB'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontWeight: '600', fontSize: '16px' }}>VISA</span>
            <Button variant="primary" size="small">
              <Icon name="Checked" />
              Default
            </Button>
          </div>
          
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>Card ending in</div>
            <div style={{ fontSize: '16px', fontWeight: '500' }}>. 3507</div>
          </div>
          
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>Cardholder name</div>
            <div style={{ fontSize: '16px', fontWeight: '500' }}>Greg Kueber</div>
          </div>
          
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>Expiry date</div>
            <div style={{ fontSize: '16px', fontWeight: '500' }}>02/30</div>
          </div>
          
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>Address</div>
            <div style={{ fontSize: '16px', fontWeight: '500' }}>2688 Greenville Hwy. Unit C...</div>
          </div>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button variant="outline" size="small">
              <Icon name="Edit" />
              Edit card
            </Button>
            <Button variant="outline" size="small">
              <Icon name="MoreVert" />
            </Button>
          </div>
        </div>
      </div>
    ),
    actions: [
      { label: 'Cancel', onClick: () => {}, variant: 'secondary' },
      { label: 'Send', onClick: () => {}, variant: 'primary' },
    ],
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState<'basic' | 'deactivation' | 'payment'>('basic');

    const openModal = (type: 'basic' | 'deactivation' | 'payment') => {
      setModalType(type);
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    const renderModalContent = () => {
      switch (modalType) {
        case 'deactivation':
          return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <strong>greggle-vm</strong>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '12px', 
                backgroundColor: '#E3F2FD', 
                borderRadius: '8px',
                fontSize: '14px',
                color: '#1976D2'
              }}>
                <Icon name="Info" />
                <span>You will still be charged for this virtual machine unless you delete it.</span>
              </div>
              
              <InputField
                id="feedback"
                label=""
                placeholder="Too many LLMs and AI Agents..."
                multiline
                rows={4}
              />
              
              <CheckBox
                id="understand-charges"
                label="I understand that I will be charged for this virtual machine while it is stopped."
                checked={true}
              />
            </div>
          );
        case 'payment':
          return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <strong>greggle-vm</strong>
              </div>
              
              <InputField
                id="feedback"
                label=""
                placeholder="Too many LLMs and AI Agents..."
                multiline
                rows={4}
              />
              
              <div style={{ 
                border: '1px solid #E5E7EB', 
                borderRadius: '8px', 
                padding: '16px',
                backgroundColor: '#F9FAFB'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontWeight: '600', fontSize: '16px' }}>VISA</span>
                  <Button variant="primary" size="small">
                    <Icon name="Checked" />
                    Default
                  </Button>
                </div>
                
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>Card ending in</div>
                  <div style={{ fontSize: '16px', fontWeight: '500' }}>. 3507</div>
                </div>
                
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>Cardholder name</div>
                  <div style={{ fontSize: '16px', fontWeight: '500' }}>Greg Kueber</div>
                </div>
                
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>Expiry date</div>
                  <div style={{ fontSize: '16px', fontWeight: '500' }}>02/30</div>
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>Address</div>
                  <div style={{ fontSize: '16px', fontWeight: '500' }}>2688 Greenville Hwy. Unit C...</div>
                </div>
                
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button variant="outline" size="small">
                    <Icon name="Edit" />
                    Edit card
                  </Button>
                  <Button variant="outline" size="small">
                    <Icon name="MoreVert" />
                  </Button>
                </div>
              </div>
            </div>
          );
        default:
          return <p>This is a basic modal with some content.</p>;
      }
    };

    return (
      <div className="asi-story-column">
        <h2>Modal Examples</h2>
        
        <div className="asi-story-row">
          <Button onClick={() => openModal('basic')}>Open Basic Modal</Button>
          <Button onClick={() => openModal('deactivation')}>Open Deactivation Modal</Button>
          <Button onClick={() => openModal('payment')}>Open Payment Modal</Button>
        </div>

        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          title={modalType === 'basic' ? 'Basic Modal' : 'Paymentmetod not prepeared yet'}
          description={modalType === 'basic' ? 'This is a basic modal example.' : 'If you have a moment, please let us know why you are leaving ASI Create'}
          actions={[
            { label: 'Cancel', onClick: closeModal, variant: 'secondary' },
            { label: modalType === 'basic' ? 'OK' : 'Send', onClick: closeModal, variant: 'primary' },
          ]}
          size="medium"
        >
          {renderModalContent()}
        </Modal>
      </div>
    );
  },
};