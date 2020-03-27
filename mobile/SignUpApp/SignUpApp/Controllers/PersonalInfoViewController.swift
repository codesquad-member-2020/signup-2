//
//  PersonalInfoViewController.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class PersonalInfoViewController: UIViewController {
    
    @IBOutlet weak var birthDateTextField: BirthDateTextField!
    @IBOutlet weak var genderSegmentedControl: GenderSegmentedControl!
    @IBOutlet weak var emailTextField: EmailTextField!
    @IBOutlet weak var phoneTextField: PhoneTextField!
    
    let emailTextFieldDelegate = EmailTextFieldDelegate()
    let phoneTextFieldDelegate = PhoneTextFieldDelegate()
    
    let personalInfoViewModel = PersonalInfoViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupTextFieldDelegate()
    }
    
    private func setupTextFieldDelegate() {
        emailTextField.delegate = emailTextFieldDelegate
        phoneTextField.delegate = phoneTextFieldDelegate
        setupViewModel()
    }
    
    private func setupViewModel() {
        birthDateTextField.personalInfoViewModel = personalInfoViewModel
        genderSegmentedControl.personalInfoViewModel = personalInfoViewModel
        emailTextFieldDelegate.personalInfoViewModel = personalInfoViewModel
        phoneTextFieldDelegate.personalInfoViewModel = personalInfoViewModel
    }
}
