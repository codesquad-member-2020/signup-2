//
//  ViewController.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/23.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class SignUpViewController: UIViewController {
    
    @IBOutlet weak var identificationTextField: IdentificationTextField!
    @IBOutlet weak var passwordTextField: PasswordTextField!
    @IBOutlet weak var passwordReconfirmationTextField: PasswordReconfirmationTextField!
    @IBOutlet weak var nameTextField: NameTextField!
    @IBOutlet weak var nextButton: SignUpNextButton!
    
    let identificationTextFieldDelegate = IdentificationTextFieldDelegate()
    let passwordTextFieldDelegate = PasswordTextFieldDelegate()
    let passwordReconfirmationTextFieldDelegate = PasswordReconfirmationTextFieldDelegate()
    let nameTextFieldDelegate = NameTextFieldDelegate()
    
    let signUpViewModel = SignUpViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupNavigation()
        setupTextFieldDelegate()
    }
    
    private func setupNavigation() {
        navigationController?.navigationBar.isHidden = true
    }
    
    private func setupTextFieldDelegate() {
        identificationTextField.delegate = identificationTextFieldDelegate
        passwordTextField.delegate = passwordTextFieldDelegate
        passwordReconfirmationTextField.delegate = passwordReconfirmationTextFieldDelegate
        nameTextField.delegate = nameTextFieldDelegate
        setupTextFieldDelegateViewModel()
    }
    
    private func setupTextFieldDelegateViewModel() {
        identificationTextFieldDelegate.signUpViewModel = signUpViewModel
        passwordTextFieldDelegate.signUpViewModel = signUpViewModel
        passwordReconfirmationTextFieldDelegate.signUpViewModel = signUpViewModel
        nameTextFieldDelegate.signUpViewModel = signUpViewModel
    }
}
