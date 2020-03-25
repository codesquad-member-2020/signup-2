//
//  ViewController.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/23.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class SignUpViewController: UIViewController {
    
    @IBOutlet weak var IDStackView: IDStackView!
    @IBOutlet weak var PWStackView: PWStackView!
    @IBOutlet weak var PWCheckStackView: PWCheckStackView!
    @IBOutlet weak var nameStackView: NameStackView!
    
    @IBOutlet weak var IDTextField: IDTextField!
    @IBOutlet weak var PWTextField: PWTextField!
    @IBOutlet weak var PWCheckTextField: PWCheckTextField!
    @IBOutlet weak var nameTextField: NameTextField!
    
    @IBOutlet weak var nextButton: SignUpNextButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupTextFieldDelegate()
        setupNextButtonObserverForValidation()
    }
    
    private func setupTextFieldDelegate() {
        IDTextField.validationDelegate = IDStackView
        PWTextField.validationDelegate = PWStackView
        PWCheckTextField.validationDelegate = PWCheckStackView
        nameTextField.validationDelegate = nameStackView
    }
    
    private func setupNextButtonObserverForValidation() {
        let textFields = [IDTextField, PWTextField, PWCheckTextField, nameTextField]
        textFields.forEach {
            $0?.validationChangedHandler = { isValid in
                var isNextButtonValid = true
                textFields.forEach {
                    guard let textField = $0 else { return }
                    guard textField.isValid else { isNextButtonValid = false; return }
                    isNextButtonValid = isNextButtonValid && true
                }
                self.nextButton.isValid = isNextButtonValid
            }
        }
    }
}
